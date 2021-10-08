import { useRef } from "react";
import { useDrop } from "react-dnd";
// import AltarCard from "../AltarCard/AltarCard";
import { ACExample } from "../DragAltarCard/ACExample";

export default function CreateDrop(props) {
  const style = {

    padding: ".5rem",
    paddingTop: "1.75rem",
    textAlign: "center",
    lineHeight: "normal",
    float: "bottom",
    color: 'black'
  };
  const parentDiv = useRef();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      let x = offset.x;
      let y = offset.y;
      x -= parentDiv.current.getBoundingClientRect().left;
      y -= parentDiv.current.getBoundingClientRect().top;

      // const

      alert(x + " " + y + " " + item.imageType);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "yellow";
  if (isActive) {
    backgroundColor = "#9395ff";
  } else if (canDrop) {
    backgroundColor = "yellow";
  }
  return (
    <>
      <div className="w-full h-full" ref={parentDiv}>
        <>
          {/* {props.altars.map((altar) =>
            altar.id === props.images.altar_id ? <AltarCard /> : "error"
          )} */}
        </>
        <>
        <div
          className="w-full h-96 text-primary"
          ref={drop}
          role={"Altar"}
          style={{ ...style, backgroundColor }}
        >
          {isActive ? "release to drop" : <><p className="mb-8 leading-6"><b>drop in here </b>to add to your divine crypto sacred art shrine</p></>}
          <>
            {/* DragAltarCard: ACExample Here */}
            
          </>
          </div>
          
          </>
      </div>
    </>
  );
}
