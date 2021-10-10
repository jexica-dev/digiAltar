import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import Box from "./Box.jsx";
import update from "immutability-helper";
import AltarImage from "../AltarImage/AltarImage";
const styles = {
  width: "100vw",
  height: "100vh",
  // border: "5px solid white",
  position: "relative",
};
export const DragContainer = ({ hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useState({
    // this data can hold anything that is relevant
    // for creating the draggable elements later.
    // you can store an image ID to pass into altarimages here for example.
    
    a: { top: 455, left: 500, imageType: 7 },
    ap: { top: 275, left: 1120, imageType: 42 },
    ac: { top: 180, left: 1100, imageType: 30 },
    ao: { top: 150, left: 815, imageType: 41 },
    ab: { top: 80, left: 485, imageType: 29 },
    b: { top: 75, left: 175, imageType: 6 },
    c: { top: 20, left: 80, imageType: 1 },
    d: { top: 195, left: 225, imageType: 19 },
    e: { top: 300, left: 275, imageType: 3 },
    f: { top: 100, left: 550, imageType: 9 },
    g: { top: 200, left: 590, imageType: 18 },
    h: { top: 200, left: 125, imageType: 4 },
    i: { top: 375, left: 325, imageType: 15 },
    j: { top: 350, left: 100, imageType: 14 },
    k: { top: 250, left: 535, imageType: 11 },
    l: { top: 355, left: 455, imageType: 10 },
    m: { top: 185, left: 750, imageType: 17 },
    n: { top: 425, left: 845, imageType: 16 },
    o: { top: 350, left: 220, imageType: 12 },
    q: { top: 470, left: 165, imageType: 8 },
    ah: { top: 185, left: 390, imageType: 34 },
    r: { top: 265, left: 405, imageType: 13 },
    s: { top: 180, left: 45, imageType: 2 },
    t: { top: 350, left: 870, imageType: 21 },
    u: { top: 200, left: 650, imageType: 22 },
    w: { top: 100, left: 915, imageType: 24 },
    x: { top: 500, left: 900, imageType: 25 },
    ag: { top: 320, left: 975, imageType: 33 },
    y: { top: 500, left: 810, imageType: 26 },
    z: { top: 375, left: 1000, imageType: 27 },
    aa: { top: 445, left: 25, imageType: 28 },
    v: { top: 550, left: 75, imageType: 23 },
    p: { top: 445, left: 340, imageType: 20 },
    ad: { top: 580, left: 320, imageType: 5 },
    al: { top: 515, left: 230, imageType: 38 },
    ae: { top: 520, left: 440, imageType: 31 },
    af: { top: 430, left: 1065, imageType: 32 },
    ai: { top: 100, left: 700, imageType: 35 },
    ak: { top: 610, left: 200, imageType: 37 },
    aj: { top: 400, left: 635, imageType: 36 },
    am: { top: 75, left: 1000, imageType: 39 },
    an: { top: 330, left: 1150, imageType: 40 },
    // aq: { top: 50, left: 1000, imageType: 43 },
    

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
          <Box
            key={key}
            id={key}
            left={box.left}
            top={box.top}
            hideSourceOnDrag={hideSourceOnDrag}
          > 
            <AltarImage imageType={box.imageType}/>
            {/* we can put anything we want in here, like altarimages */}
            {box.title}
          </Box>
        );
      })}
    </div>
  );
};
