import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHodsList } from "../../redux/dean/deanSlice";
import { getHodDetails } from "../../redux/hod/hodSlice";
import convertTime from "../../utils/timeConverter";
import { HodDetails } from "../hod/HodDetails";
import { Modal } from "react-bootstrap";

export const Hods = () => {
  const [hodId, setHodId] = useState(null);
  const dispatch = useDispatch();
  const hods = useSelector((state) => state.Deans.hods);

  useEffect(() => {
    dispatch(getHodsList());
  }, [dispatch]);

  const hodDetails = (id) => {
    dispatch(getHodDetails(id));
    setHodId(id);
  };

  const closeProfileModal = () => {
    setHodId(null);
  };

  return (
    <section className="technical-pages-bg">
      <h1 className="tech-header">HOD's LIST</h1>
      <div className="d-flex flex-column align-items-center tech-card-container">
        {hods.map((hod, index) => (
          <article className="d-flex m-2 tech-card h-25 w-75" key={index}>
            {hod.hod ? (
              <>
                {/* <img src={hod.hod.photo} width="60" height="60" /> */}
                <div>{hod.department.name}</div>
                <div className="small-fonts">
                  HOD: {hod.hod.first_name} {hod.hod.last_name}
                </div>
                <div className="small-fonts">Mobile: {hod.hod.phone_number}</div>
                <div className="small-fonts">
                  Qualification: {hod.hod.highest_academic_qualification}
                </div>
                <div className="small-fonts">Appointed on: {convertTime(hod.hod.created_at)}</div>
                <div className="d-flex justify-content-start">
                  <button
                    className="small-btn btn-light btn"
                    type="submit"
                    onClick={() => hodDetails(hod.hod.id)}
                  >
                    Profile
                  </button>
                </div>
              </>
            ) : !hod.hod && hod.department ? (
              <>
                <h2>Department: {hod.department.name}</h2>
                <div>HOD: No HOD yet!</div>
              </>
            ) : (
              ""
            )}
          </article>
        ))}
      </div>
      {hodId && (
        <Modal show={true} onHide={closeProfileModal}>
          <Modal.Body>{<HodDetails key={hodId} hodId={hodId} />}</Modal.Body>
        </Modal>
      )}
    </section>
  );
};
