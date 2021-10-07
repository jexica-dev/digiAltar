import { React } from "react";
import "./AltarForm.css";
import AltarCard from "../AltarCard/AltarCard";
import AltarImage from "../AltarImage/AltarImage";

export default function AltarForm(props) {
  return (
    <>
      <div className="flex ml-8 mt-32 justify-left w-screen">
        {/* Altar Name */}
        <input
          className="rounded-full py px-5 border border-primary text-primary bg-trp bg-opacity-100 focus:ring-2 focus:ring-white"
          type="text"
          name="altar-name"
          placeholder="altar name"
          // value={formData.email}
          // onChange={handleChange}
        />

        {/* Toggle Button */}
        <div className="toggle-button relative inline-block w-10 ml-8 align-middle select-none transition duration-200 ease-in">
          <label for="toggle" className="text-primary text-xs mb-10">
            Private?
          </label>

          <input
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

      <div className="flex flex-row">
        {/* Left Box below */}
        <div className="create-altar-container mt-4 ml-8 w-1/2 h-80 justify-left border border-primary">
          <AltarCard setToggleFetch={props.setToggleFetch} user={props.user} images={props.images} altar={props.altar} />
        </div>
        {/* Right Box below*/}
        <div className="altar-image-container mt-4 mr-8 w-1/2 h-80 justify-right border border-primary">
          <p className="w-full -mt-10 text-primary justify-right">
            {"<<"} drag + drop
          </p>
          
          <button className="bg-trp" onClick={console}>
          <AltarImage imageType={1} />
          </button>
        </div>
      </div>
    </>
  );
}
