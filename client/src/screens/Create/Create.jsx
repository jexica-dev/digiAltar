import React from "react";
import "./Create.css";
import Button from "../../components/Button/Button";
import LogoutBar from "../../components/LogoutBar/LogoutBar";

export default function Create(props) {
  return (
    <div>
      <div className="mt-32 text-right mr-12"><span className="text-primary mr-8"> Welcome, {props.username}.</span> 
        <Button onClick={props.handleLogout}>Logout</Button></div>
      
      <h1 className="text-primary mt-44 text-center">Create</h1>
      <div className="mt-4 ml-32">
      {/* Edit button will be using Link or Redirect to be edited through AltarForm */}
      <Button>Edit</Button>
      <Button>Delete</Button>
      <Button>Create</Button>
      </div>
    </div>
  );
}
