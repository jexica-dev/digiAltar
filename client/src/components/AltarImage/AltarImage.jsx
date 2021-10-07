import React from "react";
import './AltarImage.css'

export default function AltarImage(props) {
  return (
    <div>
      {props.imageType === 1 ? (
        <img className="" src="https://i.imgur.com/SwSjwZt.png" alt="flower1" />
      ) : null}
      

      {props.imageType === 2 ? (
        <img src="https://i.imgur.com/iRGDCuu.png" alt="buddha" />
      ) : null}

    </div>
  );
}
