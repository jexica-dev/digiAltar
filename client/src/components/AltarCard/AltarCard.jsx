import { React } from "react";
import AltarImage from "../AltarImage/AltarImage";

export default function AltarCard(props) {



  

  return (
    <div className="">
      {props.images
        .filter((image) => {
          return image.altar_id === props.altar.id;
        })
        .map((image) => (
          <>
            <AltarImage user={props.user} imageType={image.image_type} />
            
          </>
        ))}


      )}
    </div>
  );
}
