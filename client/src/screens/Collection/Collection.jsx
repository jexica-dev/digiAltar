import React from "react";
import "./Collection.css";
import { ACExample } from "../../components/DragAC/ACExample";

export default function Collection(props) {
  const stylesCContainer = {
    alignItems: "center",
    width: "100%",
  };

  const stylesCC = {
    width: "580px",
    alignItems: "center",
  };

  return (
    
    <div>
      {/* <h1 className="text-primary mt-44 text-center"> Collection</h1> */}
      {/* <img src="https://i.imgur.com/zN0kGhO.png" width="500px" alt="placeholder"/> */}
      {props.altars.map((altar) =>
        altar.privacy === false ? (
          <>
            <div className="w-screen flex flex-col mb-8" style={stylesCContainer}>
              <div className="m-2 relative" style={stylesCC}>
                <ACExample
                  dragDisabled
                  setToggleFetch={props.setToggleFetch}
                  altar={altar}
                  images={props.images}
                />

                <p className="absolute z-10 bottom-4 left-6 text-left text-primary">
                  {altar.name}
                </p>
                <p className="absolute z-10 bottom-4 right-6 text-right text-primary">
                  {altar.user.username}
                </p>

              </div>
            </div>
          </>
        ) : null
      )}
      </div>
    
  );
}
