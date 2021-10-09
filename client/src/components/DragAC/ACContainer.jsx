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

const styles = {
  width: "100vw",
  height: "100vh",
  position: "relative",
};

export const ACContainer = ({
  hideSourceOnDrag,
  dragDisabled,
  altar,
  images,
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
      drop(image, monitor) {
        if (dragDisabled) return;

        if (image.id) {
          const delta = monitor.getDifferenceFromInitialOffset();
          const left = Math.round(image.left + delta.x);
          const top = Math.round(image.top + delta.y);
          moveBox(image.id, left, top);
          updateImage(image.id, {
            left: left,
            top: top,
            image_type: image.imageType,
            altar_id: altar.id,
          });
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
          })();

          // moves the images from the right container to the left

          // import { createImage, updateImage, deleteImage } from "../../services/images.js";

          // const handleRemove = async () => {
          //   await removeFromCart(props.user.id, fullJam._id);
          //   props.setToggleFetch(prevState => !prevState)
          // }

          // const handleAdd = async () => {
          //   await addToCart(props.user.id, fullJam._id)
          //   props.setToggleFetch(prevState => !prevState)
          // }
        }

        return undefined;
      },
    }),
    [moveBox]
  );
  return (
    <div ref={drop} style={styles}>
      <div ref={containerDiv} className="w-full h-full">
        {Object.keys(boxes).map((key) => {
          // remember this is a deconstruction
          // which means we are pulling variables out of the
          // boxes[key] object.
          const box = boxes[key];
          return (
            // this is where we get the data from the state.
            // in here we are mapping through the list of boxes and creating
            // an element on the page for each box
            // we can the contents of this box component to an altarimage so
            // that we are dragging images
            // around instead of text.
            <>
              {/* We will make the DoubleClick the Delete functionality */}
              <button
                onDoubleClick={() => window.alert("Doubleclick will delete!")}
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
            </>
          );
        })}
      </div>
    </div>
  );
};
