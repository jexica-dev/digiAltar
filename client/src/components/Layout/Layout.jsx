import React from "react";
import './Layout.css'
import Header from "../Header/Header";
import FooterNav from "../FooterNav/FooterNav";

export default function Layout(props) {
  return (
    <>
      <div className="layout-container">
        <Header />
        <div className="layout-children">{props.children}</div>
        <FooterNav currentUser={props.currentUser}/>
      </div>
    </>
  );
}
