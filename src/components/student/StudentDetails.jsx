import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentDetails } from "../../redux/student/studentSlice";
import "../../styles/profile_pages/student.css";

export const StudentDetails = ({ studentId }) => {
  const dispatch = useDispatch();
  const { profile_id, email, created_date } = useSelector((state) => state.user.currentUser);
  const studentDetails = useSelector((state) => state.Students.studentDetails);

  useEffect(() => {
    dispatch(getStudentDetails(studentId || profile_id));
  }, [dispatch, profile_id, studentId]);

  return (
    <section className="position-relative">
      <article className="headline d-flex flex-column align-items-center p-3">
        <h1 className="text-white">
          {studentDetails.first_name} {studentDetails.last_name}
        </h1>
        <small className="text-white">
          Email: {email} | Phone: {studentDetails.phone_number}
        </small>
        <img
          className="profile-photo rounded-circle"
          src={studentDetails.photo}
          alt={studentDetails.first_name}
        />
      </article>
      <article>
        <div className="d-flex justify-content-center">
          <p className="bio text-center ms-5 me-5 mt-5">{studentDetails.bio}</p>
        </div>
        <div></div>
        <div className="d-flex m-5 card text-white p-3">
          <div>Gender: {studentDetails.gender}</div>
          <div>Age: {studentDetails.age}</div>
          <div>Level: {studentDetails.level}</div>
          <div>Date Admitted: {created_date}</div>
          <div>LGA: {studentDetails.lga_of_origin}</div>
        </div>
      </article>
    </section>
  );
};
