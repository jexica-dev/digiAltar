import React from "react";
import './UserAltars';
import Button from "../../components/Button/Button";

export default function UserAltars(props) {
  return (
    <>
      <div className="mt-32 text-right mr-12"><span className="text-primary mr-8"> Welcome, {props.username}.</span> 
      <Button onClick={props.handleLogout}>Logout</Button></div>
      
      
      <h1 className="text-primary mt-24 text-center">User Altars</h1>
      <Button>Edit</Button>
      <Button>Delete</Button>
      <Button>Create</Button>
    </>
  );
}
