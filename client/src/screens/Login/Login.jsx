import React from "react";
import { useState } from "react";
import "./Login.css";
import Headline from "../../components/Headline/Headline";
import LoginNav from "../../components/LoginNav/LoginNav";
import Button from "../../components/Button/Button";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorStatus, setErrorStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let status = props.handleLogin(formData);
    if (status) {
      setTimeout(() =>{setErrorStatus(true);}, 500)
      
    }
  };

  return (
    <>
      <LoginNav />
      <Headline>Welcome,</Headline>
      <form className="signin-container" onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              className=" -mb-px rounded-full py-2 px-7 border-2 border-primary text-primary bg-trp bg-opacity-100 focus:ring-2 focus:ring-white"
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              className="rounded-full py-2 px-7 border-2 border-primary text-primary bg-trp bg-opacity-100 focus:ring-2 focus:ring-white"
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />
          </li>
          <li className="text-right">
            <Button>sign in</Button>
          </li>
          <div className="text-primary">
            {errorStatus ? "Invalid login" : null}
          </div>
        </ul>
      </form>
    </>
  );
}
