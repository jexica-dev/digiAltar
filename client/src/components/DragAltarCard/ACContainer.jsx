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

    // We'll be adding here the altar images
    // of selected Altar

    // we need to map through the altar and the images 
    // to get the images top and left locations of selected Altar
    // 

    a: { top: 220, left: 460, imageType: 7 },
    c: { top: 20, left: 50, imageType: 1 },
    b: { top: 20, left: 100, imageType: 4 },
  



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
          <>


            {/* We will make the DoubleClick the Delete functionality */}
          <button onDoubleClick={() => window.alert('Doubleclick will delete!')}>
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
  );
};
