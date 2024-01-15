import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentDetails } from "../../redux/student/studentSlice";
import "../../styles/profile_pages/profile.css";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { StudentProfileUpdate } from "../forms/update_profiles/StudentProfileUpdate";
import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMedium, FaTwitter } from "react-icons/fa6";

export const StudentDetails = ({ studentId }) => {
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState(false);
  const { profile_id, created_date } = useSelector(
    (state) => state.user.currentUser
  );

  const studentDetails = useSelector((state) => state.Students.studentDetails);

  useEffect(() => {
    if(studentId) {
      dispatch(getStudentDetails(studentId));
    } else {
      dispatch(getStudentDetails(profile_id));
    }
  }, [dispatch, profile_id, studentId]);

  const hideProfile = {
    display: updateForm ? "none" : "block",
  };

  const hidePen = {
    display: studentId ? "none" : "block",
  };

  const AdjustImageSize = {
    width: studentId ? "120px" : "",
    height: studentId ? "120px" : "",
    top: studentId ? "60%" : "",
  };

  const showProfile = (toogle) => {
    if (toogle) {
      setUpdateForm(false);
    }
  };

  if (!studentDetails) {
    return <div className="technical-pages-bg-v2 text-white d-flex justify-content-center align-items-center h-100">Loading...</div>
  }

  return (
    <section className="position-relative">
      <article style={hideProfile}>
        <div
          id="headline"
          className={studentId ? 'headline-student d-flex flex-column align-items-center p-3' : 'headline-dean d-flex flex-column align-items-center p-3'}
        >
          <h1 className="text-white">
            {studentDetails.first_name} {studentDetails.last_name}
          </h1>
          <FaPencilAlt
            className="position-absolute top-0 end-0 mt-4 me-5 pencil"
            style={hidePen}
            onClick={() => setUpdateForm(true)}
          />
          <small className="text-white">
            Email: {studentDetails.email} | Phone: {studentDetails.phone_number}
          </small>
          <div className="headline-socials d-flex justify-content-between">
            <a target={studentDetails.facebook ? "_blank" : ""} href={studentDetails.facebook ? studentDetails.facebook : "#"} rel="noreferrer">
              <FaFacebookF className="social-icons" />
            </a>
            <a target={studentDetails.instagram ? "_blank" : ""} href={studentDetails.instagram ? studentDetails.instagram : "#"} rel="noreferrer">
              <FaInstagram className="social-icons" />
            </a>
            <a target={studentDetails.linkedIn ? "_blank" : ""} href={studentDetails.linkedIn ? studentDetails.linkedIn : "#"} rel="noreferrer">
              <FaLinkedinIn className="social-icons" />
            </a>
            <a target={studentDetails.medium ? "_blank" : ""} href={studentDetails.medium ? studentDetails.medium : "#"} rel="noreferrer">
              <FaMedium className="social-icons" />
            </a>
            <a target={studentDetails.twitter ? "_blank" : ""} href={studentDetails.twitter ? studentDetails.twitter : "#"} rel="noreferrer">
              <FaTwitter className="social-icons" />
            </a>
          </div>
          <img
            style={AdjustImageSize}
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
          <div className={studentId ? 'd-flex m-5 card-student flex-column text-white p-3' : 'd-flex m-5 card-dean flex-column text-white p-3'}>
            <div>Gender: {studentDetails.gender}</div>
            <div>Age: {studentDetails.age}</div>
            <div>Level: {studentDetails.level}</div>
            <div>Date Admitted: {created_date}</div>
            <div>Country: {studentDetails.nationality}</div>
          </div>
        </div>
      </article>
      <article>
        {updateForm && <StudentProfileUpdate showProfile={showProfile} />}
      </article>
    </section>
  );
};

StudentDetails.propTypes = {
  studentId: PropTypes.number
};
