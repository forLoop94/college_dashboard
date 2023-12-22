import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDepartmentLecturers } from "../../redux/department/departmentSlice";
import { LecturerDetails } from "../lecturer/LecturerDetails";

export const DepartmentLecturers = () => {
  const dispatch = useDispatch();
  const [lecturerId, setLecturerId] = useState(null);
  const lecturers = useSelector(
    (state) => state.Departments.departmentLecturers
  );

  useEffect(() => {
    dispatch(getDepartmentLecturers());
  }, [dispatch]);

  const showLecturerProfile = (id) => {
    setLecturerId(id);
  }

  const closeProfileModal = () => {
    setLecturerId(null);
  }

  if (lecturers.length === 0) {
    return "No lecturers yet!";
  } else {
    return (
      <div className="technical-pages-bg">
        <h1 className="tech-header">Lecturers</h1>
        <small className="small-note-light">Lecturers in {lecturers[0].department.name} department</small>
        {lecturers.map((lecturer) => (
          <div key={lecturer.id}>
            <h2>{lecturer.first_name}</h2>
            <div>{lecturer.last_name}</div>
            <button
              className="btn btn-light"
              onClick={() => showLecturerProfile(lecturer.id)}
            >
              Profile
            </button>
          </div>
        ))}
        {lecturerId && (
          <Modal show={true} onHide={closeProfileModal}>
            <Modal.Body>
              {<LecturerDetails key={lecturerId} lecturerId={lecturerId} />}
            </Modal.Body>
          </Modal>
        )}
      </div>
    );
  }
};
