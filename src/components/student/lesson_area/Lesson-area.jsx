import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../../../styles/lesson_area.css";
import { LessonAreaForm } from "../../forms/LessonAreaForm";
import { Chats } from "./Chats";
import { Submissions } from "./Submissions";

export const LessonArea = ({ lecturerInfo, courseInfo, showLecturer }) => {
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
  // const userId = role === "student" ? studentId : lecturerId;
  console.log(courseId + courseTitle + studentId + lecturerId + firstName +lastName)

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

  if (role && role === "student") {
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
        setArea(data);
        setStudentCourseInfo({
          id: lecturerId,
          first_name: firstName,
          last_name: lastName,
          course_id: courseId,
          course_title: courseTitle,
        });
      };

      fetchData();
    }, [profile_id, courseId, lecturerId]);
  } else if (role === "lecturer") {
    useEffect(() => {
      const fetchData = async () => {
        const data = await getLessonArea(studentId, courseId, profile_id);
        if (!data) {
          setShowForm(true);
        }
        setArea(data);
        setStudentCourseInfo({
          id: studentId,
          first_name: firstName,
          last_name: lastName,
          course_id: courseId,
          course_title: courseTitle,
        });
      };

      fetchData();
    }, [profile_id, courseId, studentId]);
  } else {
    return;
  }

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

  const closeLessonAreaForm = () => {
    setShowForm(false);
  };

  return (
    <main>
      <nav className="d-flex ps-5 bg-light position-fixed top-0 w-100">
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
            onClick={() => {
              showChatsPage();
            }}
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
          on matters related to course: {courseTitle}
        </p>
        {role === "student" ? (
          <div>
            <div className="ms-4">student: You</div>
            <div className="ms-4">
              lecturer: {firstName} {lastName}
            </div>
          </div>
        ) : (
          <div>
            <div className="ms-4">Lecturer: You</div>
            <div className="ms-4">
              Student: {firstName} {lastName}
            </div>
          </div>
        )}
        <p className="ms-4 text-sm">
          Note: If the student, lecturer or course information above is
          incorrect, make a complain at <a href="#">studentSuport@rails.org</a>
        </p>
        {role === "student" ? (
          <button
            className="btn btn-danger ms-4"
            onClick={() => navigate(`/recommended_courses/${courseId}/${courseTitle}`)}
          >
            Close lesson area
          </button>
        ) : (
          <button
            className="btn btn-danger ms-4"
            onClick={() =>
              navigate(`/assigned_courses/${courseId}/${courseTitle}`)
            }
          >
            Close lesson area
          </button>
        )}
      </section>
      <section>
        {linkPages.submission && (
          <Submissions
            courseInfo={courseInfo}
            otherUserInfo={
              role === "student" ? lecturerInfo : studentCourseInfo
            }
            lessonAreaId={area.id}
          />
        )}
        {linkPages.chats && (
          <Chats
            otherUserInfo={
              role === "student" ? lecturerInfo : studentCourseInfo
            }
            lessonAreaId={area.id}
          />
        )}
      </section>
      {showForm && (
        <Modal show={true} onHide={closeLessonAreaForm}>
          <Modal.Body>
            {role === "student" ? (
              <LessonAreaForm
                studentId={profile_id}
                courseId={courseInfo.id}
                lecturerId={lecturerInfo.id}
                setShowForm={setShowForm}
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
