import React from "react";
import { Link } from "react-router-dom";
import './LoginNav'

export default function LoginNav() {

  const styles = {
    fontFamily: 'Corben',
    fontSize: '25px'
};
  
  return (
    <div style={{ ...styles}} className="login-nav-container text-right mt-20 mr-20 -mb-20">
      <Link className="mr-2" to="/login">
        <button  className="button-login py-2 px-1 text-primary bg-trp border-b-2 border-trp hover:border-primary">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="button-login py-2 px-1 text-primary bg-trp border-b-2 border-trp hover:border-primary">
          Signup
        </button>
      </Link>
    </div>
  );
}
