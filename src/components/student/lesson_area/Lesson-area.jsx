import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../../styles/lesson_area.css";
import { LessonAreaForm } from "../../forms/LessonAreaForm";
import { Chats } from "./Chats";
import { Submissions } from "./Submissions";

export const LessonArea = ({ lecturerInfo, courseInfo, showLecturer }) => {
  const [showForm, setShowForm] = useState(false);
  const { profile_id } = useSelector((state) => state.user.currentUser);
  const [linkPages, setLinkPages] = useState({
    submission: false,
    chats: false,
  });

  const getLessonArea = async (studentId, courseId, lecturerId) => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:4000/api/v1/student_lesson/${studentId}/${courseId}/${lecturerId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLessonArea(
        profile_id,
        courseInfo.id,
        lecturerInfo.id
      );
      if (!data) {
        setShowForm(true);
      }
    };

    fetchData();
  }, [profile_id, courseInfo.id, lecturerInfo.id]);

  const showSubmissionPage = () => {
    setLinkPages({
      submission: true,
      chats: false,
    });
  };

  const showChatsPage = () => {
    setLinkPages({
      submission: false,
      chats: true,
    });
  };

  const hideLessonAreaText = {
    display: linkPages.submission || linkPages.chats ? "none" : "block",
  };

  const showLessonArea = () => {
    setLinkPages({
      submission: false,
      chats: false,
    });
  };

  const stylePressedLink = {
    submission: {
      color: linkPages.submission ? "#0d6efd" : "",
    },
    chats: {
      color: linkPages.chats ? "#0d6efd" : "",
    },
  };

  return (
    <main>
      <nav className="d-flex ps-5 bg-light nav-menu">
        <h3 className="mt-1 pointer" onClick={() => showLessonArea()}>
          Lesson Area
        </h3>
        <ul className="d-flex mt-2 ms-5 list-style-none">
          <li
            className="pointer grey"
            onClick={() => showSubmissionPage()}
            style={stylePressedLink.submission}
          >
            Submissions
          </li>
          <li
            className="ms-3 pointer grey"
            onClick={() => showChatsPage()}
            style={stylePressedLink.chats}
          >
            Chats
          </li>
        </ul>
      </nav>
      <section className="mb-5" style={hideLessonAreaText}>
        <small className="ms-4 me-2 text-primary">Did you know?</small>
        <small className="grey">
          Submissions of articles, links, project etc, made here are end-to-end
          encryted, meaning you dont have to be afraid of IPT
        </small>
        <p className="m-4">
          This Lesson area is provided to support the easy exchange of study
          materials, tests, assignments, examinations and general academic
          conversions between the student(name below) and lecturer(name below)
          on matters related to course: {courseInfo.title}
        </p>
        <div className="ms-4">student: ...</div>
        <div className="ms-4">
          lecturer: {lecturerInfo.first_name} {lecturerInfo.last_name}
        </div>
        <p className="ms-4 text-sm">
          Note: If the student, lecturer or course information above is
          incorrect, make a complain at <a href="#">studentSuport@rails.org</a>
        </p>
        <button
          className="btn btn-danger ms-4"
          onClick={() => showLecturer(true)}
        >
          Close lesson area
        </button>
      </section>
      <section>
        {linkPages.submission && (
          <Submissions courseInfo={courseInfo} lecturerInfo={lecturerInfo} />
        )}
        {linkPages.chats && (
          <Chats courseInfo={courseInfo} lecturerInfo={lecturerInfo} />
        )}
      </section>
      {showForm && (
        <LessonAreaForm
          studentId={profile_id}
          courseId={courseInfo.id}
          lecturerId={lecturerInfo.id}
          setShowForm={setShowForm}
        />
      )}
    </main>
  );
};
