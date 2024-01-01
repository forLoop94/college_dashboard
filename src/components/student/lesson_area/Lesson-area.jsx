import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/lesson_area.css";
import { LessonAreaForm } from "../../forms/LessonAreaForm";
import { Chats } from "./Chats";
import { Submissions } from "./Submissions";

export const LessonArea = () => {
  const [area, setArea] = useState(null);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [studentCourseInfo, setStudentCourseInfo] = useState({
    id: null,
    first_name: "",
    last_name: "",
    course_id: "",
    course_title: "",
  });
  const { role, profile_id } = useSelector((state) => state.user.currentUser);
  const [linkPages, setLinkPages] = useState({
    submission: false,
    chats: false,
  });

  const { courseId, courseTitle, studentId, lecturerId, firstName, lastName } =
    useParams();

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

  // if (role && role === "student") {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getLessonArea(
  //         profile_id,
  //         courseId,
  //         lecturerId
  //       );
  //       if (!data) {
  //         setShowForm(true);
  //       }
  //       setArea(data);
  //       setStudentCourseInfo({
  //         id: lecturerId,
  //         first_name: firstName,
  //         last_name: lastName,
  //         course_id: courseId,
  //         course_title: courseTitle,
  //       });
  //     };

  //     fetchData();
  //   }, [profile_id, courseId, lecturerId]);
  // } else if (role === "lecturer") {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getLessonArea(studentId, courseId, profile_id);
  //       if (!data) {
  //         setShowForm(true);
  //       }
  //       setArea(data);
  //       setStudentCourseInfo({
  //         id: studentId,
  //         first_name: firstName,
  //         last_name: lastName,
  //         course_id: courseId,
  //         course_title: courseTitle,
  //       });
  //     };

  //     fetchData();
  //   }, [profile_id, courseId, studentId]);
  // } else {
  //   return;
  // }

  useEffect(() => {
    const fetchData = async () => {
      let data;

      if (role === "student") {
        data = await getLessonArea(profile_id, courseId, lecturerId);
      } else if (role === "lecturer") {
        data = await getLessonArea(studentId, courseId, profile_id);
      }

      if (!data) {
        setShowForm(true);
      }

      setArea(data);
      setStudentCourseInfo({
        id: role === "student" ? lecturerId : studentId,
        first_name: firstName,
        last_name: lastName,
        course_id: courseId,
        course_title: courseTitle,
      });
    };

    fetchData();
  }, [profile_id, courseId, lecturerId, studentId, role, firstName, lastName, courseTitle]);

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
      color: linkPages.submission ? "var(--razzmatazz)" : "",
    },
    chats: {
      color: linkPages.chats ? "var(--razzmatazz)" : "",
    },
  };

  const closeLessonAreaForm = () => {
    setShowForm(false);
  };

  return (
    <main className="lesson-area-bg">
      <nav className="tech-header d-flex ps-5 pe-5">
        <h5 className="mt-1 pointer hFive" onClick={() => showLessonArea()}>
          Lesson Area
        </h5>
        <ul className="d-flex mt-1 list-style-none nav-links">
          <li
            className="pointer nav-link"
            onClick={() => showSubmissionPage()}
            style={stylePressedLink.submission}
          >
            Submissions
          </li>
          <li
            className="ms-3 pointer nav-link"
            onClick={() => {
              showChatsPage();
            }}
            style={stylePressedLink.chats}
          >
            Chats
          </li>
        </ul>
      </nav>
      <section className="lesson-area-intro" style={hideLessonAreaText}>
        <small className="razzma-text">Did you know?</small>
        <small>
          Submissions of articles, links, project etc, made here are end-to-end
          encryted, meaning you dont have to be afraid of IPT
        </small>
        <p className="mt-2">
          This Lesson area is provided to support the easy exchange of study
          materials, tests, assignments, examinations and general academic
          conversions between the student(name below) and lecturer(name below)
          on matters related to course: {courseTitle}
        </p>
        {role === "student" ? (
          <div>
            <div>student: You</div>
            <div>
              lecturer: {firstName} {lastName}
            </div>
          </div>
        ) : (
          <div>
            <div>Lecturer: You</div>
            <div>
              Student: {firstName} {lastName}
            </div>
          </div>
        )}
        <p>
          Note: If the student, lecturer or course information above is
          incorrect, make a complain at{" "}
          <a className="razzma-text" href="#">
            studentSuport@rails.org
          </a>
        </p>
        {role === "student" ? (
          <button
            className="inner-page-return"
            onClick={() =>
              navigate(`/recommended_courses/${courseId}/${courseTitle}`)
            }
          >
            <FaAngleLeft />
          </button>
        ) : (
          <button
            className="inner-page-return"
            onClick={() =>
              navigate(`/assigned_courses/${courseId}/${courseTitle}`)
            }
          >
            <FaAngleLeft />
          </button>
        )}
      </section>
      <section>
        {linkPages.submission && (
          <Submissions
            otherUserInfo={studentCourseInfo}
            lessonAreaId={area.id}
            showLessonArea={showLessonArea}
          />
        )}
        {linkPages.chats && (
          <Chats
            otherUserInfo={studentCourseInfo}
            lessonAreaId={area.id}
            setLinkPages={setLinkPages}
          />
        )}
      </section>
      {showForm && (
        <Modal show={true} onHide={closeLessonAreaForm}>
          <Modal.Body>
            {role === "student" ? (
              <LessonAreaForm
                studentId={profile_id}
                studentCourseInfo={studentCourseInfo}
                setShowForm={setShowForm}
                setArea={setArea}
              />
            ) : (
              <LessonAreaForm
                studentCourseInfo={studentCourseInfo}
                lecturerId={profile_id}
                setShowForm={setShowForm}
                setArea={setArea}
              />
            )}
          </Modal.Body>
        </Modal>
      )}
    </main>
  );
};
