import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentDetails } from "../../redux/student/studentSlice";
import "../../styles/profile_pages/student.css";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { StudentProfileUpdate } from "../forms/update_profiles/StudentProfileUpdate";

export const StudentDetails = ({ studentId }) => {
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState(false);
  const { profile_id, email, created_date } = useSelector(
    (state) => state.user.currentUser
  );
  const studentDetails = useSelector((state) => state.Students.studentDetails);

  useEffect(() => {
    dispatch(getStudentDetails(studentId || profile_id));
  }, [dispatch, profile_id, studentId]);

  const hideProfile = {
    display: updateForm ? "none" : "block",
  };

  const showProfile = (toogle) => {
    if(toogle) {
      setUpdateForm(false);
    }
  };

  return (
    <section className="position-relative">
      <article style={hideProfile}>
        <div className="headline d-flex flex-column align-items-center p-3">
          <h1 className="text-white">
            {studentDetails.first_name} {studentDetails.last_name}
          </h1>
          <FaPencilAlt
            className="text-white position-absolute top-0 end-0 mt-4 me-5"
            onClick={() => setUpdateForm(true)}
          />
          <small className="text-white">
            Email: {email} | Phone: {studentDetails.phone_number}
          </small>
          <img
            className="profile-photo rounded-circle"
            src={studentDetails.photo}
            alt={studentDetails.first_name}
          />
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <p className="bio text-center ms-5 me-5 mt-5">
              {studentDetails.bio}
            </p>
          </div>
          <div></div>
          <div className="d-flex m-5 card text-white p-3">
            <div>Gender: {studentDetails.gender}</div>
            <div>Age: {studentDetails.age}</div>
            <div>Level: {studentDetails.level}</div>
            <div>Date Admitted: {created_date}</div>
            <div>LGA: {studentDetails.lga_of_origin}</div>
          </div>
        </div>
      </article>
      <article>{updateForm && <StudentProfileUpdate setUpdateForm={setUpdateForm} />}</article>
    </section>
  );
};
