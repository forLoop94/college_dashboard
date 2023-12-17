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
  }

  return (
    <section className="m-5">
      {hods.map((hod, index) => (
        <article className="d-flex" key={index}>
          {hod.hod ? (
            <>
              <img src={hod.hod.photo} width="100" height="100" />
              <div>Department: {hod.department.name}</div>
              <div>
                HOD: {hod.hod.first_name} {hod.hod.last_name}
              </div>
              <div>Mobile: {hod.hod.phone_number}</div>
              <div>Qualification: {hod.hod.highest_academic_qualification}</div>
              <div>Appointed on: {convertTime(hod.hod.created_at)}</div>
              <button
                className="btn btn-primary"
                onClick={() => hodDetails(hod.hod.id)}
              >
                full details
              </button>
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
      {hodId && (
        <Modal show={true} onHide={closeProfileModal}>
          <Modal.Body>{<HodDetails key={hodId} hodId={hodId} />}</Modal.Body>
        </Modal>
      )}
    </section>
  );
};
