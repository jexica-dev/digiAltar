import React from "react";
import "./Collection.css";
import AltarCard from "../../components/AltarCard/AltarCard";

export default function Collection(props) {
  return (
    <div>
      <h1 className="text-primary mt-44 text-center"> Collection</h1>
      {/* <img src="https://i.imgur.com/zN0kGhO.png" width="500px" alt="placeholder"/> */}
      {props.altars.map((altar) =>
        altar.privacy === false ? (
          <>
          <AltarCard
            collection
            user={props.user}
            images={props.images}
            altar={altar}
            />
            
            <p className="text-primary text-center"> {altar.name}</p>
            </>
        ) : null
      )}
      
    </div>
  );
}
