import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeanDetails } from "../../redux/dean/deanSlice";
import "../../styles/profile_pages/profile.css";
import { FaPencilAlt, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";
import { DeanProfileUpdate } from "../forms/update_profiles/DeanProfileUpdate";
import { FaInstagram, FaLinkedinIn, FaMedium, FaTwitter } from "react-icons/fa6";

export const DeanDetails = ({ deanId }) => {
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState(false);
  const { profile_id, email, created_date } = useSelector(
    (state) => state.user.currentUser
  );
  const deanDetails = useSelector((state) => state.Deans.details);

  useEffect(() => {
    dispatch(getDeanDetails(deanId || profile_id));
  }, [dispatch, profile_id, deanId]);

  const hideProfile = {
    display: updateForm ? "none" : "block",
  };

  const hidePen = {
    display: deanId ? "none" : "block",
  };

  const showProfile = (toogle) => {
    if (toogle) {
      setUpdateForm(false);
    }
  };

  return (
    <section className="position-relative">
      <article style={hideProfile}>
        <div className="headline-dean d-flex flex-column align-items-center p-3">
          <h1>
            {deanDetails.first_name} {deanDetails.last_name}
          </h1>
          <FaPencilAlt
            className="position-absolute top-0 end-0 mt-4 me-5 pencil"
            style={hidePen}
            onClick={() => setUpdateForm(true)}
          />
          <small>
            Email: {email} | Phone: {deanDetails.phone_number}
          </small>
          <div className="headline-socials d-flex justify-content-between mt-2">
            <FaFacebookF className="social-icons"/>
            <FaInstagram className="social-icons"/>
            <FaLinkedinIn className="social-icons"/>
            <FaMedium className="social-icons"/>
            <FaTwitter className="social-icons"/>
          </div>
          <img
            className="profile-photo rounded-circle"
            src={deanDetails.photo}
            alt={deanDetails.first_name}
          />
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <p className="bio text-center ms-5 me-5 mt-5">{deanDetails.bio}</p>
          </div>
          <div></div>
          <div className="d-flex m-5 card-dean flex-column p-3">
            <div>Cadre: {deanDetails.rank}</div>
            <div>Gender: {deanDetails.gender}</div>
            <div>Age: {deanDetails.age}</div>
            <div>Admin Experience(years): {deanDetails.years_of_admin_exp}</div>
            <div>
              Number of Publications: {deanDetails.number_of_publications}
            </div>
            <div>
              Qualification: {deanDetails.highest_academic_qualification}
            </div>
            <div>Date Appointed: {created_date}</div>
            <div>Country: {deanDetails.nationality}</div>
          </div>
        </div>
      </article>
      <article>
        {updateForm && <DeanProfileUpdate showProfile={showProfile} />}
      </article>
    </section>
  );
};

DeanDetails.propTypes = {
  deanId: PropTypes.number,
};
