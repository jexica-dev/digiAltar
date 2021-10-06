import React from "react";
import './UserAltars';
import Button from "../../components/Button/Button";
import AltarCard from "../../components/AltarCard/AltarCard";

export default function UserAltars(props) {
  return (
    <>
      {/* {props.users.map((user) => ( */}
      <div className="mt-32 text-right mr-12"><span className="text-primary mr-8"> Welcome, username.</span>
      <Button onClick={props.handleLogout}>Logout</Button></div>
      {/* ))} */}
      {props.altars.map((altar) => (
      <h1 className="text-primary mt-2 text-center">{altar.name} </h1>
      ))}
      <AltarCard />
      <Button>Edit</Button>
      <Button>Delete</Button>
      <Button>Create</Button>
      
    </>
  );
}
