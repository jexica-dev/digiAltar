import React from "react";

export default function Button(props) {

  return (
    <button onClick={props.onClick} className="rounded-full py-2 px-7 text-black bg-primary border border-primary hover:bg-trp hover:text-primary">
      {props.children}
    </button>
  );
}
