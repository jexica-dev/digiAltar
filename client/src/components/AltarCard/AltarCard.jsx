import { React } from "react";
import { useHistory } from "react-router";
import Button from "../Button/Button";
import AltarImage from "../AltarImage/AltarImage";
import { deleteAltar } from "../../services/altars";

export default function AltarCard(props) {
  const history = useHistory();

  const handleEdit = (e) => {
    e.preventDefault();
    history.push(`/myaltars/${props.altar.id}/edit`);
    
  }
  const handleDelete = (e) => {
    deleteAltar(props.altar.id);
    setTimeout(() => {
      props.setToggleFetch((prevState)=>(!prevState))
    }, 500);
  }

  console.log(props.images);
  return (
    <div className="text-center">
      {props.images
        .filter((image) => {
          return image.altar_id === props.altar.id;
        })
        .map((image) => (
          <>
            <AltarImage user={props.user} image={image} />
          </>
        ))}

      {props.collection ? (
        <h5 className="text-primary mt-2 mb-4">{props.altar.name}</h5>
      ) : (
        <>
          <h3 className="text-primary mt-2 mb-4">{props.altar.name}</h3>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </>
      )}
    </div>
  );
}
