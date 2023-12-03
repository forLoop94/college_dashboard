import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    role: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const baseURL = "http://localhost:4000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await fetch(`${baseURL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: data,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        const authorization = response.headers.get("authorization");
        localStorage.setItem("token", authorization);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={data.username}
        name="username"
        onChange={handleChange}
      />
      <select
        value={data.role}
        name="role"
        onChange={handleChange}
      >
        <option value="student">Student</option>
        <option value="lecturer">Lecturer</option>
        <option value="hod">Head of Department</option>
        <option value="dean">Dean</option>
      </select>
      <input
        type="email"
        placeholder="email"
        value={data.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        value={data.password}
        name="password"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password confirmation"
        value={data.password_confirmation}
        name="password_confirmation"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <Link to="/login">Log in</Link>
    </form>
  );
};
