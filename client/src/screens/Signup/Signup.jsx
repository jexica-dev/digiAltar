import React from "react";
import { useState } from "react";
import "./Signup.css";
import LoginNav from "../../components/LoginNav/LoginNav";
import Headline from "../../components/Headline/Headline";

export default function Signup(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: true,
    errorMsg: "information invalid",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegister(formData);
  };

  return (
    <>
      <LoginNav />
      <Headline>Welcome,</Headline>
      <form className="signup-container" onSubmit={handleSubmit}>
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
              className=" -mb-px rounded-full py-2 px-7 border-2 border-primary text-primary bg-trp bg-opacity-100 focus:ring-2 focus:ring-white"
              type="text"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              className="rounded-full py-2 px-7 border-2 border-primary text-primary bg-trp bg-opacity-100 focus:ring-2 focus:ring-white"
              type="password"
              name="password"
              placeholder="password (7+)"
              value={formData.password}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              className="rounded-full py-2 px-7 border-2 border-primary text-primary bg-trp bg-opacity-100 focus:ring-2 focus:ring-white"
              type="password"
              name="passwordConfirmation"
              placeholder="confirm password"
              value={formData.passwordConfirmation}
              onChange={handleChange}
            />
          </li>
          <li className="text-right">
            <button className="rounded-full py-2 px-7 text-black bg-primary bg-opacity-100 border border-primary hover:bg-trp hover:text-primary">
              sign up
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}
