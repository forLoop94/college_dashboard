import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getlecturerDetails } from "../../redux/lecturer/lecturerSlice";
import "../../styles/profile_pages/profile.css";
import { FaPencilAlt } from "react-icons/fa";
import { LecturerProfileUpdate } from "../forms/update_profiles/LecturerProfileUpdate";
import PropTypes from 'prop-types';

export const LecturerDetails = ({ lecturerId }) => {
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState(false);
  const { profile_id, email, created_date } = useSelector(
    (state) => state.user.currentUser
  );
  const lecturerDetails = useSelector((state) => state.Lecturers.details);

  useEffect(() => {
    dispatch(getlecturerDetails(lecturerId || profile_id));
  }, [dispatch, profile_id, lecturerId]);

  const hideProfile = {
    display: updateForm ? "none" : "block",
  };

  const hidePen = {
    display: lecturerId ? "none" : "block",
  };

  const AdjustImageSize = {
    width: lecturerId ? "120px" : "",
    height: lecturerId ? "120px" : "",
    top: lecturerId ? "60%" : ""
  }

  const showProfile = (toogle) => {
    if (toogle) {
      setUpdateForm(false);
    }
  };

  return (
    <section className="position-relative">
      <article style={hideProfile}>
        <div className={lecturerId ? 'headline-lecturer d-flex flex-column align-items-center p-3' : 'headline-dean d-flex flex-column align-items-center p-3'}>
          <h1 className="text-white">
            {lecturerDetails.first_name} {lecturerDetails.last_name}
          </h1>
          <FaPencilAlt
            className="position-absolute top-0 end-0 mt-4 me-5 pencil"
            style={hidePen}
            onClick={() => setUpdateForm(true)}
          />
          <small className="text-white">
            Email: {email} | Phone: {lecturerDetails.phone_number}
          </small>
          <img
          style={AdjustImageSize}
            className="profile-photo rounded-circle"
            src={lecturerDetails.photo}
            alt={lecturerDetails.first_name}
          />
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <p className="bio text-center ms-5 me-5 mt-5">
              {lecturerDetails.bio}
            </p>
          </div>
          <div></div>
          <div className={lecturerId ? 'd-flex m-5 card-lecturer flex-column text-white p-3' : 'd-flex m-5 card-dean flex-column text-white p-3'}>
            <div>Gender: {lecturerDetails.gender}</div>
            <div>Age: {lecturerDetails.age}</div>
            <div>Major: {lecturerDetails.core_discipline}</div>
            <div>
              Number of Publications: {lecturerDetails.number_of_publications}
            </div>
            <div>
              Qualification: {lecturerDetails.highest_academic_qualification}
            </div>
            <div>Date recriuted: {created_date}</div>
            <div>LGA: {lecturerDetails.lga_of_origin}</div>
          </div>
        </div>
      </article>
      <article>
        {updateForm && <LecturerProfileUpdate showProfile={showProfile} />}
      </article>
    </section>
  );
};

LecturerDetails.propTypes = {
  lecturerId: PropTypes.number
};
