import React from "react";
import "./Create.css";
import Button from "../../components/Button/Button";
import LogoutBar from "../../components/LogoutBar/LogoutBar";

export default function Create() {
  return (
    <div>
      <LogoutBar></LogoutBar>
      <h1 className="text-primary mt-44 text-center">Create</h1>
      <div className="mt-4 ml-32">
      <Button>Edit</Button>
      <Button>Delete</Button>
      <Button>Create</Button>
      </div>
    </div>
  );
}
