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
  };

  const closeProfileModal = () => {
    setLecturerId(null);
  };

  if (lecturers.length === 0) {
    return <h1 className="technical-pages-bg-v2 text-white d-flex justify-content-center p-5 h-100">No Lecturer yet!</h1>
  } else {
    return (
      <div className="technical-pages-bg-v2">
        <h1 className="tech-header-v2">Lecturers</h1>
        <div className="d-flex flex-column align-items-center tech-card-container-v2">
          <small className="small-note-light">
            Lecturers in {lecturers[0].department.name} department
          </small>
          {lecturers.map((lecturer) => (
            <div
              className="tech-card-v2 d-flex mb-5 justify-content-between align-items-center h-25"
              key={lecturer.id}
            >
              <img
                src={lecturer.photo}
                alt={lecturer.first_name}
                width="80px"
                height="80px"
              />

              <div className="w-75 d-flex flex-column justify-content-between upper-details">
                <div className="d-flex details justify-content-between">
                  <h5>
                    <span>{lecturer.first_name + " "}</span>
                    <span>{" " + lecturer.last_name}</span>
                  </h5>
                  <div>Gender: {lecturer.gender}</div>
                  <div>Major: {lecturer.core_discipline}</div>
                  <div>
                    Qualification: {lecturer.highest_academic_qualification}
                  </div>
                </div>

                <div className="d-flex card-links">
                  <div className="d-flex">
                    <div
                      className="false-links"
                      onClick={() => showLecturerProfile(lecturer.id)}
                    >
                      View full profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="position-absolute gpa">
          Total: {lecturers.length}
        </div>
        {lecturerId && (
          <Modal show={true} onHide={closeProfileModal}>
            <Modal.Body>
              {<LecturerDetails key={lecturerId} lecturerId={lecturerId} closeProfileModal={closeProfileModal} />}
            </Modal.Body>
          </Modal>
        )}
      </div>
    );
  }
};
