import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getHodDetails } from "../../redux/hod/hodSlice";
import "../../styles/profile_pages/profile.css";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { HodProfileUpdate } from "../forms/update_profiles/HodProfileUpdate";
import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMedium, FaTwitter } from "react-icons/fa6";

export const HodDetails = ({ hodId }) => {
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState(false);
  const { profile_id, created_date } = useSelector(state => state.user.currentUser);
  const hodDetails = useSelector(state => state.Hods.details);

  useEffect(() => {
    if(hodId) {
      dispatch(getHodDetails(hodId));
    } else {
      dispatch(getHodDetails(profile_id));
    }
  }, [dispatch, profile_id, hodId]);

  const hideProfile = {
    display: updateForm ? "none" : "block",
  };

  const hidePen = {
    display: hodId ? "none" : "block",
  }

  const AdjustImageSize = {
    width: hodId ? "120px" : "",
    height: hodId ? "120px" : "",
    top: hodId ? "60%" : ""
  }

  const showProfile = (toogle) => {
    if(toogle) {
      setUpdateForm(false);
    }
  };


  if (!hodDetails) {
    return <div className="technical-pages-bg-v2 text-white d-flex justify-content-center align-items-center h-100">Loading...</div>
  }

  return (
    <section className="position-relative">
      <article style={hideProfile}>
        <div className={hodId ? 'headline-hod d-flex flex-column align-items-center p-3' : 'headline-dean d-flex flex-column align-items-center p-3'}>
          <h1 className="text-white">
            {hodDetails.first_name} {hodDetails.last_name}
          </h1>
          <FaPencilAlt
            className="position-absolute top-0 end-0 mt-4 me-5 pencil"
            style={hidePen}
            onClick={() => setUpdateForm(true)}
          />
          <small className="text-white">
            Email: {hodDetails.email} | Phone: {hodDetails.phone_number}
          </small>
          <div className="headline-socials d-flex justify-content-between">
            <a target={hodDetails.facebook ? "_blank" : ""} href={hodDetails.facebook ? hodDetails.facebook : "#"} rel="noreferrer">
              <FaFacebookF className="social-icons" />
            </a>
            <a target={hodDetails.instagram ? "_blank" : ""} href={hodDetails.instagram ? hodDetails.instagram : "#"} rel="noreferrer">
              <FaInstagram className="social-icons" />
            </a>
            <a target={hodDetails.linkedIn ? "_blank" : ""} href={hodDetails.linkedIn ? hodDetails.linkedIn : "#"} rel="noreferrer">
              <FaLinkedinIn className="social-icons" />
            </a>
            <a target={hodDetails.medium ? "_blank" : ""} href={hodDetails.medium ? hodDetails.medium : "#"} rel="noreferrer">
              <FaMedium className="social-icons" />
            </a>
            <a target={hodDetails.twitter ? "_blank" : ""} href={hodDetails.twitter ? hodDetails.twitter : "#"} rel="noreferrer">
              <FaTwitter className="social-icons" />
            </a>
          </div>
          <img
            style={AdjustImageSize}
            className="profile-photo rounded-circle"
            src={hodDetails.photo}
            alt={hodDetails.first_name}
          />
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <p className="bio text-center ms-5 me-5 mt-5">
              {hodDetails.bio}
            </p>
          </div>
          <div></div>
          <div className={hodId ? 'd-flex m-5 card-hod flex-column text-white p-3' : 'd-flex m-5 card-dean flex-column text-white p-3'}>
            <div>Gender: {hodDetails.gender}</div>
            <div>Age: {hodDetails.age}</div>
            <div>Admin Experience: {hodDetails.years_of_admin_exp}</div>
            <div>
              Number of Publications: {hodDetails.number_of_publications}
            </div>
            <div>
              Qualification: {hodDetails.highest_academic_qualification}
            </div>
            <div>Date Appointed: {created_date}</div>
            <div>Country: {hodDetails.nationality}</div>
          </div>
        </div>
      </article>
      <article>{updateForm && <HodProfileUpdate showProfile={showProfile} />}</article>
    </section>
  )
}

HodDetails.propTypes = {
  hodId: PropTypes.number
};
