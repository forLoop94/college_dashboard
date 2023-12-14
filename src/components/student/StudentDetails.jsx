import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentDetails } from "../../redux/student/studentSlice";

export const StudentDetails = (studentId) => {
  const dispatch = useDispatch();
  const { profile_id } = useSelector(state => state.user.currentUser);
  console.log(profile_id)
  const studentDetails = useSelector(state => state.Students.studentDetails);
  console.log(studentDetails)

  useEffect(() => {
    dispatch(getStudentDetails(studentId || profile_id));
  }, [dispatch, profile_id, studentId]);

  return (
    <section>
      <article>
        <div>{studentDetails.first_name}</div>
        <div>{studentDetails.last_name}</div>
        <div>{studentDetails.gender}</div>
      </article>
    </section>
  )
}
