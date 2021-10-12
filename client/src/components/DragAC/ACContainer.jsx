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
  // width: "100vw",
  // height: "100vh",
  position: "relative",
  // background: 'white',
  filter: "drop-shadow(0 0 1.85rem #ffff0025)",
  borderRadius: "1rem"
};

export const ACContainer = ({
  hideSourceOnDrag,
  dragDisabled,
  altar,
  images,
  setToggleFetch,
}) => {
  const containerDiv = useRef();

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
                {/* we can put anything we want in here, like altarimages */}
              </ACBox>
            </button>
          );
        })}
      </div>
    </div>
  );
};
