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

export const CreateBox = function CreateBox({ imageType }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { imageType },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      const newPlace = monitor.getClientOffset();
      if (item && dropResult) {
        // alert(`CreateHandle toggled to add image: ${imageType} into ${dropResult.name} at ${newPlace}`);
        // alert(`CreateHandle toggled to add image: ${imageType} at ${newPlace}`);
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
      data-testid={`box-${imageType}`}
    >
      <AltarImage imageType={imageType} />
    </div>
  );
};
