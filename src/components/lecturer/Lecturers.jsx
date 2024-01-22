import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLecturers } from "../../redux/lecturer/lecturerSlice";
import { LecturerDetails } from "./LecturerDetails";

export const Lecturers = () => {
  const [lecturerId, setLecturerId] = useState();
  const [privateChatMsg, setPrivateChatMsg] = useState(false);
  const dispatch = useDispatch();
  const lecturers = useSelector((state) => state.Lecturers.lecturers);

  useEffect(() => {
    dispatch(getLecturers());
  }, [dispatch]);

  const privateChat = () => {
    setPrivateChatMsg(true);
  };

  const closePrivateChatMsg = () => {
    setPrivateChatMsg(false);
  };

  const closeProfileModal = () => {
    setLecturerId(null);
  };

  if (lecturers.length === 0) {
    return <h1 className="technical-pages-bg-v2 text-white d-flex justify-content-center p-5 h-100">No Lecturers yet!</h1>
  } else {
    return (
      <div className="technical-pages-bg-v2">
        <h1 className="tech-header-v2">Lecturers</h1>
        <section className="tech-card-container-v2 d-flex flex-column align-items-center">
          {lecturers.map((lecturer) => (
            <div
              className="tech-card-v2 h-25 mt-3 d-flex lecturers justify-content-between"
              key={lecturer.id}
            >
              <div>
                {lecturer.first_name} {lecturer.last_name}
              </div>
              <div className="d-flex card-links">
                <div className="d-flex">
                  <div
                    className="false-links"
                    onClick={() => setLecturerId(lecturer.id)}
                  >
                    Profile
                    <span className="ms-1 me-1">|</span>
                  </div>
                  <div className="false-links" onClick={() => privateChat()}>
                    Private Chat
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        {privateChatMsg && (
          <Modal show={true} onHide={closePrivateChatMsg}>
            <Modal.Body>
              <div className="bg-warning p-2 text-white">
                Feature available in the next release
              </div>
            </Modal.Body>
          </Modal>
        )}
        {lecturerId && (
          <Modal show={true} onHide={closeProfileModal}>
            <Modal.Body>
              {<LecturerDetails key={lecturerId} lecturerId={lecturerId} />}
            </Modal.Body>
          </Modal>
        )}
      </div>
    );
  }
};
