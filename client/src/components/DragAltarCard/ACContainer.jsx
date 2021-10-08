import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import ACBox from "./ACBox.jsx";
import update from "immutability-helper";
import AltarImage from "../AltarImage/AltarImage";
const styles = {
  width: "100vw",
  height: "100vh",
  // border: "5px solid white",
  position: "relative",
};
export const ACContainer = ({ hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useState({
    // this data can hold anything that is relevant
    // for creating the draggable elements later.
    // you can store an image ID to pass into altarimages here for example.

    a: { top: 455, left: 425, imageType: 7 },
    b: { top: 75, left: 175, imageType: 6 },
    c: { top: 20, left: 80, imageType: 1 },
    d: { top: 195, left: 225, imageType: 19 },
    e: { top: 300, left: 275, imageType: 3 },
    f: { top: 100, left: 550, imageType: 9 },
    g: { top: 200, left: 590, imageType: 12 },



  });
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
  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );
  return (
    <div ref={drop} style={styles}>
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
          <ACBox
            key={key}
            id={key}
            left={box.left}
            top={box.top}
            hideSourceOnDrag={hideSourceOnDrag}
          > 
            <AltarImage imageType={box.imageType}/>
            {/* we can put anything we want in here, like altarimages */}
            {box.title}
          </ACBox>
        );
      })}
    </div>
  );
};
