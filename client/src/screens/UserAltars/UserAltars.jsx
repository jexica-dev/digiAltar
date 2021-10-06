import React from "react";
import './UserAltars';
import Button from "../../components/Button/Button";
import AltarCard from "../../components/AltarCard/AltarCard";

export default function UserAltars(props) {
  return (
    <>
      {props.user ? <div className="mt-32 text-right mr-12"><span className="text-primary mr-8"> Welcome, {props.user.username}.</span>
      <Button onClick={props.handleLogout}>Logout</Button></div> : null}  
      
      
      {props.altars.map((altar) => (
        <AltarCard images={props.images} altar={altar}/>
      ))}


      <Button>Create</Button>
      
    </>
  );
}
