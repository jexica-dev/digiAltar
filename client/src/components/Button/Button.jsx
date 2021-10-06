import React from "react";

export default function Button(props) {
  // const handleClick = (children) => {
  //   if (children === 'logout') {
  //     props.handleLogout()
  //   } 
// } 


  return (
    <button onClick={props.onClick} className="rounded-full py-2 px-7 text-black bg-primary bg-opacity-100 border border-primary hover:bg-trp hover:text-primary">
      {props.children}
    </button>
  );
}
