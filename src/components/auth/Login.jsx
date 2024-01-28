import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth_pages.css";
import { FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [demoUserModal, setDemoUserModal] = useState(false);

  const baseURL = "https://online-school-93yp.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      toast.error("At least one required field is empty");
      return;
    }
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
        const authorization = response.headers.get("authorization");
        localStorage.setItem("token", authorization);
        navigate("/");
        toast.success("Log in successful");
        return resData;
      }
    } catch (error) {
      toast.error("You could not be logged in");
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const demoUser = () => {
    setDemoUserModal(true)
  }

  const closeDemoUserModal = () => {
    setDemoUserModal(false);
  }

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
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary">
            Log in
            <FaGraduationCap className="ms-2" />
          </button>
        </div>
        <div className="text-white mt-3 text-center">
          Quick tour without having to register?<br></br> sign in as{" "}
          <span className="pointer primary" onClick={() => demoUser()}>
            Demo User
          </span>
        </div>
        <div className="text-white position-absolute top-0 end-0 m-5">
          Not registered?
          <Link className="ms-2 text-white text-decoration-none" to="/signup">
            <button className="btn btn-primary" type="submit">
              <FaGraduationCap className="me-2" />
              Sign up
              <FaChevronRight className="ms-2" />
            </button>
          </Link>
        </div>
        {demoUserModal && (
          <Modal show={true} onHide={closeDemoUserModal}>
            <Modal.Body>
              <h2>
                Log in as...
              </h2>
              <div className="pointer text-primary" onClick={() => {setData({
                email: "ds@mail.com",
                password: 123456
              }); setDemoUserModal(false); toast.success("Now click the Log in button, don't bother about completing the fields")}}>Demo Student</div>
              <div className="pointer text-primary" onClick={() => {setData({
                email: "dl@mail.com",
                password: 123456
              }); setDemoUserModal(false); toast.success("Now click the Log in button, don't bother about completing the fields")}}>Demo Lecturer</div>
              <div className="pointer text-primary" onClick={() => {setData({
                email: "dh@mail.com",
                password: 123456
              }); setDemoUserModal(false); toast.success("Now click the Log in button, don't bother about completing the fields")}}>Demo HOD</div>
              <div className="pointer text-primary" onClick={() => {setData({
                email: "dd@mail.com",
                password: 123456
              }); setDemoUserModal(false); toast.success("Now click the Log in button, don't bother about completing the fields")}}>Demo Dean</div>
            </Modal.Body>
          </Modal>
        )}
      </form>
    </section>
  );
};
