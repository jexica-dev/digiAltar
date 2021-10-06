import React from "react";
import './UserAltars';
import Button from "../../components/Button/Button";

export default function UserAltars(props) {
  return (
    <>
      <div className="mt-32 text-right"><span className="text-primary"> Welcome, username.</span> 
      <Button onClick={props.handleLogout}>Test</Button></div>
      
      
      <h1 className="text-primary mt-44 text-center">User Altars</h1>
    </>
  );
}
