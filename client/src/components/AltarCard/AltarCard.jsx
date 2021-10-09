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

      {/* 
        <h1 className="text-primary mt-2 mb-4">{props.altar.name}</h1>
     */}

      )}
    </div>
  );
}
