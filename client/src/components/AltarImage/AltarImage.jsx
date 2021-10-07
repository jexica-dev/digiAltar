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

      {props.imageType === 3 ? (
        <img src="https://i.imgur.com/Oko2TUp.png" alt="candle1" />
      ) : null}

      {props.imageType === 4 ? (
        <img src="https://i.imgur.com/5pHBSWA.png" alt="calavera1" />
      ) : null}

      {props.imageType === 5 ? (
        <img src="https://i.imgur.com/t0Lbcf2.png" alt="bowl1" />
      ) : null}

      {props.imageType === 6 ? (
        <img className="w-64" src="https://i.imgur.com/gGlBwh3.png" alt="led1" />
      ) : null}

      {props.imageType === 7 ? (
        <img src="https://i.imgur.com/5pHBSWA.png" alt="calavera1" />
      ) : null}

      {props.imageType === 8 ? (
        <img src="https://i.imgur.com/5pHBSWA.png" alt="calavera1" />
      ) : null}

      {props.imageType === 9 ? (
        <img src="https://i.imgur.com/5pHBSWA.png" alt="calavera1" />
      ) : null}




    </div>
  );
}
