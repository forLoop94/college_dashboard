import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGraduationCap, FaChevronRight } from "react-icons/fa";
import "../../styles/auth_pages.css";
import { toast } from "react-toastify";

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
    if (
      !data.username ||
      !data.role ||
      !data.email ||
      !data.password ||
      !data.password_confirmation
    ) {
      toast.error('At least one required field is empty');
      return;
    }

    if (data.password !== data.password_confirmation) {
      toast.error("password mismatch");
      return;
    }

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
        toast.success(
          `Welcome ${data.username}! Log in with the same credentials`
        );
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
    <section className="auth-forms d-flex justify-content-center align-items-center vh-100 vw-100">
      <form onSubmit={handleSubmit}>
        <header className="d-flex d-flex justify-content-center align-items-center">
          <h3 className="p-4 text-light">Sign up</h3>
        </header>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={data.username}
          name="username"
          onChange={handleChange}
        />
        <select
          value={data.role}
          name="role"
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Role</option>
          <option value="student">Student</option>
          <option value="lecturer">Lecturer</option>
          <option value="hod">Head of Department</option>
          <option value="dean">Dean</option>
        </select>
        <input
          type="email"
          className="form-control mt-4"
          placeholder="email"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control"
          placeholder="password"
          value={data.password}
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          className="form-control"
          placeholder="password confirmation"
          value={data.password_confirmation}
          name="password_confirmation"
          onChange={handleChange}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" type="submit">
            Sign up
            <FaGraduationCap className="ms-2" />
          </button>
        </div>
        <div className="text-white position-absolute top-0 end-0 m-5">
          Already registered?
          <Link className="ms-2 text-white text-decoration-none" to="/login">
            <button className="btn btn-primary" type="submit">
              <FaGraduationCap className="me-2" />
              Log in
              <FaChevronRight className="ms-2" />
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};
