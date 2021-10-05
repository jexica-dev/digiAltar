import React from "react";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form className="signin-container">
      <ul >
        <li>
          <input
            className="-mb-px rounded-full py-2 px-7 border-2 border-primary text-primary bg-trp bg-opacity-100 "
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
        </li>
        <li>
          <input
            className="rounded-full py-2 px-7 border-2 border-primary text-primary bg-trp bg-opacity-100"
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </li>
        <li className="text-right">
          <button className="rounded-full py-2 px-7 text-black bg-primary bg-opacity-100 border border-primary hover:bg-trp hover:text-primary">
            sign in
          </button>
        </li>
      </ul>
    </form>
  );
}
