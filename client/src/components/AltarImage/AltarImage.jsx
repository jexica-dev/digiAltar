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
        <img  className="w-34" src="https://i.imgur.com/JBfJOkL.png" alt="led2" />
      ) : null}

      {props.imageType === 8 ? (
        <img src="https://i.imgur.com/xe2MhVj.png" alt="fruit1" />
      ) : null}

      {props.imageType === 9 ? (
        <img src="https://i.imgur.com/TUNNl7v.png" alt="flower2" />
      ) : null}

      {props.imageType === 10 ? (
        <img src="https://i.imgur.com/Gw6tHOA.png" alt="crystals1" />
      ) : null}


      {props.imageType === 11 ? (
        <img src="https://i.imgur.com/1O6Dyg3.png" alt="ganesha1" />
      ) : null}

      {props.imageType === 12 ? (
        <img className="w-24" src="https://i.imgur.com/kInduau.png" alt="candle2" />
      ) : null}

      {props.imageType === 13 ? (
        <img src="https://imgur.com/VJ2pXzU" alt="sage1" />
      ) : null}

      {props.imageType === 14 ? (
        <img src="https://i.imgur.com/kFFDKji.png" alt="book1" />
      ) : null}

      {props.imageType === 15 ? (
        <img src="https://i.imgur.com/8AjKLn4.png" alt="cactus1" />
      ) : null}

      {props.imageType === 16 ? (
        <img src="https://i.imgur.com/Q3cjvqp.png" alt="book1" />
      ) : null}

      {props.imageType === 17 ? (
        <img className="w-44" src="https://i.imgur.com/hkIetv9.png" alt="combo1" />
      ) : null}




    </div>
  );
}
