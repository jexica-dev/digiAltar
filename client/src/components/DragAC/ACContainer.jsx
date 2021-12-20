import { useCallback, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import ACBox from "./ACBox.jsx";
import update from "immutability-helper";
import AltarImage from "../AltarImage/AltarImage";

import {
  createImage,
  updateImage,
  deleteImage,
} from "../../services/images.js";

const stylesAltars = {
  position: "relative",
  filter: "drop-shadow(0 0 1.85rem #ffff0025)",
  borderRadius: "1rem"
};

// The container that accepts the altar objects from menu into the new digiAltar

export const ACContainer = ({
  hideSourceOnDrag,
  dragDisabled,
  altar,
  images,
  setToggleFetch,
}) => {
  const containerDiv = useRef();

// Using the UseEffect, we set the state of the boxes, which hold the images.
// Each image is linked its altar and has a unique imageType (which is set/updated in AltarImage.jsx)
// Each image also has its own coordinates (top, left), which is set and updated in the useEffect. 
  
  useEffect(() => {
    const dragImages = images.reduce((acc, image) => {
      if (image.altar_id === altar.id) {
        acc[image.id] = {
          top: parseFloat(image.top),
          left: parseFloat(image.left),
          imageType: image.image_type,
        };
      }
      return acc;
    }, {});
    setBoxes(dragImages);
  }, [images]);

  const [boxes, setBoxes] = useState({});


// Each time the boxes are moved, they're updated and the boxes are set.
  
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
  );

  const createBox = useCallback(
    (id, left, top, imageType) => {
      setBoxes({
        ...boxes,
        [id]: {
          left: left,
          top: top,
          imageType: imageType,
        },
      });
    },
    [boxes, setBoxes]
  );



// This is from React DnD's library that allows us to drag - "drop" an object
// this is the container that will accept the box (that holds the image)
// In here, we recall from above the new state changes for the boxes
// based on React Dnd's library components ".getDifferenceFromInitialOffset"
// This helps calculate the new location by adding/subtracting values from the top/left parameters  

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      async drop(image, monitor) {
        if (dragDisabled) return;

        if (image.id) {
          const delta = monitor.getDifferenceFromInitialOffset();
          const left = Math.round(image.left + delta.x);
          const top = Math.round(image.top + delta.y);
          moveBox(image.id, left, top);
          await updateImage(image.id, {
            left: left,
            top: top,
            image_type: image.imageType,
            altar_id: altar.id,
          });

          setToggleFetch((prevState) => !prevState);
          // this updates image in the database.
        } else {
          const offset = monitor.getClientOffset();
          let x = offset.x;
          let y = offset.y;
          // This is to make sure we calculate within the container by subtracting x or y amount from the top left corner.
          x -= containerDiv.current.getBoundingClientRect().left;
          y -= containerDiv.current.getBoundingClientRect().top;
          (async () => {
            let data = await createImage({
              left: x,
              top: y,
              image_type: image.imageType,
              altar_id: altar.id,
            });
            createBox(data.id, x, y, image.imageType);
            setToggleFetch((prevState) => !prevState);
          })();
        }

        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div ref={drop} style={stylesAltars} className=" w-192 h-96 overflow-hidden">
      <div ref={containerDiv} >
        {Object.keys(boxes).map((key) => {
          const box = boxes[key];

          return (
            <button
              
              onDoubleClick={async () => {
                if (dragDisabled) return;
                await deleteImage(key);
                setToggleFetch((prevState) => !prevState);
              }}
              
            >
              <ACBox
                key={key}
                id={key}
                left={box.left}
                top={box.top}
                hideSourceOnDrag={hideSourceOnDrag}
              >
                <AltarImage imageType={box.imageType} />
              </ACBox>
            </button>
          );
        })}
      </div>
    </div>
  );
};
