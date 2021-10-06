import React from "react";
import "./Create.css";

export default function Create() {
  return (
    <div>
      <h1 className="text-primary mt-44 text-center">Create</h1>
      
      <button className="rounded-full py-2 px-7 text-black bg-primary bg-opacity-100 border border-primary hover:bg-trp hover:text-primary">
        Edit
      </button>
      <button className="rounded-full py-2 px-7 text-black bg-primary bg-opacity-100 border border-primary hover:bg-trp hover:text-primary">
        Delete
      </button>
      <button className="rounded-full py-2 px-7 text-black bg-primary bg-opacity-100 border border-primary hover:bg-trp hover:text-primary">
        Add New 
      </button>
    </div>
  );
}
