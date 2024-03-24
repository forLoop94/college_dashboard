import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDepartmentStudents } from "../../redux/department/departmentSlice";
import { StudentDetails } from "../student/StudentDetails";

export const DepartmentStudents = () => {
  const dispatch = useDispatch();
  const [studentId, setStudentId] = useState(null);
  const students = useSelector((state) => state.Departments.departmentStudents);

  useEffect(() => {
    dispatch(getDepartmentStudents());
  }, [dispatch]);

  const showStudentProfile = (id) => {
    setStudentId(id);
  };

  const closeProfileModal = () => {
    setStudentId(null);
  };

  if (students.length === 0) {
    return <h1 className="technical-pages-bg-v2 text-white d-flex justify-content-center p-5 h-100">No students yet!</h1>
  } else {
    return (
      <div className="technical-pages-bg-v2">
        <h1 className="tech-header-v2">Students</h1>
        <div className="d-flex flex-column align-items-center tech-card-container-v2">
          <small className="small-note-light">
            Students in {students[0].department.name} department
          </small>
          {students.map((student) => (
            <div
              className="tech-card-v2 d-flex mb-5 justify-content-between align-items-center h-25"
              key={student.id}
            >
              <img
                src={student.photo}
                alt={student.first_name}
                width="80px"
                height="80px"
              />

              <div className="w-75 d-flex flex-column justify-content-between upper-details">
                <div className="d-flex details justify-content-between">
                  <h5>
                    <span>{student.first_name + " "}</span>
                    <span>{" " + student.last_name}</span>
                  </h5>
                  <div>Gender: {student.gender}</div>
                  <div>Level: {student.level}</div>
                  <div>Department: {student.department.name}</div>
                </div>

                <div className="d-flex card-links">
                  <div className="d-flex">
                    <div
                      className="false-links"
                      onClick={() => showStudentProfile(student.id)}
                    >
                      View full profile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="position-absolute gpa">Total: {students.length}</div>
        {studentId && (
          <Modal show={true} onHide={closeProfileModal}>
            <Modal.Body>
              {<StudentDetails key={studentId} studentId={studentId} closeProfileModal={closeProfileModal} />}
            </Modal.Body>
          </Modal>
        )}
      </div>
    );
  }
};
