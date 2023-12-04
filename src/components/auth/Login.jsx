// import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth_pages.css";
import { FaGraduationCap } from "react-icons/fa";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const baseURL = "http://localhost:4000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: data,
        }),
      });
      if (response.ok) {
        const resData = await response.json();
        console.log(resData);
        const authorization = response.headers.get("authorization");
        localStorage.setItem("token", authorization);
        console.log(authorization);
        console.log(resData.status.message);
        navigate("/");
      }
    } catch (error) {
      return error;
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="vh-100 vw-100 d-flex justify-content-center align-items-center auth-forms">
      <form onSubmit={handleSubmit}>
        <header className="d-flex d-flex justify-content-center align-items-center">
          <h3 className="p-4 text-light">Log in</h3>
        </header>
        <input
          type="email"
          className="form-control"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-primary">
            Log in
            <FaGraduationCap className="ms-2"/>
          </button>
        </div>
        <div className="text-white position-absolute top-0 end-0 m-5">
          Not registered?
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </section>
  );
};
