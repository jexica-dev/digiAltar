import React from "react";
import Button from "../Button/Button";
import AltarImage from "../AltarImage/AltarImage";

export default function AltarCard(props) {
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
          <Button>Edit</Button>
          <Button>Delete</Button>
        </>
      )}
    </div>
  );
}
