import { useDrag } from "react-dnd";
import AltarImage from "../AltarImage/AltarImage";

const style = {
  backgroundColor: "transparent",
  padding: "0.5rem",
  margin: '-1rem',
  cursor: "move",
  float: "left",
  height: "10rem",
  // width: "auto",
};

export const CreateBox = function CreateBox(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { imageType: props.imageType },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      const newPlace = monitor.getClientOffset();
      if (item && dropResult) {
        // alert(`CreateHandle toggled to add image: ${props.imageType} into ${dropResult.name} at ${newPlace}`);
        // alert(`CreateHandle toggled to add image: ${props.imageType} at ${newPlace}`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      role="Box"
      style={{ ...style, opacity }}
      data-testid={`box-${props.imageType}`}
      className="absolute"
      style={{top: props.top, left: props.left}}
    >
      <AltarImage imageType={props.imageType} />
    </div>
  );
};
