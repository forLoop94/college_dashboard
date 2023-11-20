import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getLecturerEligibleCourses } from '../redux/lecturer/lecturerSlice';
import { getCurrentUser } from '../redux/user/userSlice';

export const LecturerEligibleCourses = () => {
  const dispatch = useDispatch();
  const { profile_id } = useSelector((state) => state.user.currentUser);
  console.log(profile_id);
  const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(getCurrentUser());

    if (profile_id) {
      dispatch(getLecturerEligibleCourses(profile_id));
    }
  }, [dispatch, profile_id, token]);

  const courses = useSelector((state) => state.Lecturers.eligibleCourses);
  console.log(courses);

  return (
    <section>
      <h1>Courses you qualify to handle</h1>
      {courses.map((course) => (
        <article key={course.id}>
          <h2>{course.title}</h2>
          <div>{course.code}</div>
          <div>{course.level}</div>
        </article>
      ))}
    </section>
  )
}
