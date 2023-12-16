import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getHodDetails } from "../../redux/hod/hodSlice";
import "../../styles/profile_pages/profile.css";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { HodProfileUpdate } from "../forms/update_profiles/HodProfileUpdate";

export const HodDetails = ({ hodId }) => {
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState(false);
  const { profile_id, email, created_date } = useSelector(state => state.user.currentUser);
  const hodDetails = useSelector(state => state.Hods.details);

  useEffect(() => {
    dispatch(getHodDetails(hodId || profile_id));
  }, [dispatch, profile_id, hodId]);

  const hideProfile = {
    display: updateForm ? "none" : "block",
  };

  const hidePen = {
    display: hodId ? "none" : "block"
  }

  const showProfile = (toogle) => {
    if(toogle) {
      setUpdateForm(false);
    }
  };


  return (
    <section className="position-relative">
      <article style={hideProfile}>
        <div className="headline-hod d-flex flex-column align-items-center p-3">
          <h1 className="text-white">
            {hodDetails.first_name} {hodDetails.last_name}
          </h1>
          <FaPencilAlt
            className="position-absolute top-0 end-0 mt-4 me-5 pencil"
            style={hidePen}
            onClick={() => setUpdateForm(true)}
          />
          <small className="text-white">
            Email: {email} | Phone: {hodDetails.phone_number}
          </small>
          <img
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
          <div className="d-flex m-5 card-hod flex-column text-white p-3">
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
            <div>LGA: {hodDetails.lga_of_origin}</div>
          </div>
        </div>
      </article>
      <article>{updateForm && <HodProfileUpdate showProfile={showProfile} />}</article>
    </section>
  )
}
