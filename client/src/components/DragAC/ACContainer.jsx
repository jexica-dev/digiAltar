import { useCallback, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import ACBox from "./ACBox.jsx";
import update from "immutability-helper";
import AltarImage from "../AltarImage/AltarImage";

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

  const [boxes, setBoxes] = useState(dragImages);

  const moveBox = useCallback(
    (id, left, top, imageType) => {
      if (!id) {
        id = "" + Math.random();
        setBoxes({
          ...boxes,
          [id]: {
            left: left,
            top: top,
            imageType: imageType,
          },
        });
      } else {
        setBoxes(
          update(boxes, {
            [id]: {
              $merge: { left, top },
            },
          })
        );
      }
    },
    [boxes, setBoxes]
  );
  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item, monitor) {
        if (dragDisabled) return;
        const delta = monitor.getDifferenceFromInitialOffset();
        console.log(delta);
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        const offset = monitor.getClientOffset();
        let x = offset.x;
        let y = offset.y;
        x -= containerDiv.current.getBoundingClientRect().left;
        y -= containerDiv.current.getBoundingClientRect().top;

        if (item.id) {
          moveBox(item.id, left, top);
        } else {
          moveBox(null, x, y, item.imageType);
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
