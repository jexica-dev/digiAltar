import { React, useState} from "react";
import "./AltarForm.css";
import CreateExample from "../DragCreateDrop/CreateExample";
import Button from "../Button/Button";
import { updateAltar } from "../../services/altars";

export default function AltarForm(props) {
  
  const [isEditing, setisEditing] = useState(false);
  // make an onchange={} infoHandle to prepopulate the name and the privacy(false) setting.

  // make a onSubmit={} submitHandle to update the name and the privacy setting.

  const handleToggle = async (e) => {
    
    await updateAltar(props.altar.id, { privacy: e.target.checked });
    props.setToggleFetch((prevState) => (!prevState));

  }

  const handleNameChange = async (e) => {
    await updateAltar(props.altar.id, { name: e.target.value });
    props.setToggleFetch((prevState) => (!prevState));
    
  }


  return (
    <>
      <div className="flex ml-8 mt-32 justify-left w-screen">
        {/* Altar Name */}
        <input
          className="rounded-full py px-5 border border-primary text-primary bg-trp bg-opacity-100 focus:ring-2 focus:ring-white"
          value={isEditing ? null : props.altar.name}
          type="text"
          name="altar-name"
          placeholder="altar name"
          onChange={handleNameChange}
          onFocus={()=>{setisEditing(true)}}
          onBlur={()=>{setisEditing(false)}}

        />

        {/* Toggle Button */}
        <div className="toggle-button relative inline-block w-10 ml-8 align-middle select-none transition duration-200 ease-in">
          <label for="toggle" className="text-primary text-xs mb-10">
            Private?
          </label>

          <input
            onChange={handleToggle}
            checked={props.altar.privacy}
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"
          />
          <label
            for="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-secondary cursor-pointer"
          ></label>
        </div>
      </div>

      {/* Form for draggable saved images */}

      <CreateExample
        setToggleFetch={props.setToggleFetch}
        altar={props.altar}
        images={props.images}
      />
    </>
  );
}
