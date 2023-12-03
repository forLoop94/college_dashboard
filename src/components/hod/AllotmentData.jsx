import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllotmentData, getAllotmentData } from "../../redux/allotment_data/allotmentSlice";
import { getDepartmentCourses, getDepartmentLecturers } from "../../redux/department/departmentSlice";

export const AllotmentData = () => {
  const dispatch = useDispatch();
  const allotmentInfo = useSelector((state) => state.Allotments.allotmentData);
  const { profile_id } = useSelector((state) => state.user.currentUser);
  const courses = useSelector((state) => state.Departments.departmentCourses);
  const lecturers = useSelector(
    (state) => state.Departments.departmentLecturers
  );
  const [data, setData] = useState({
    lecturer_id: '',
    course_id: ''
  })

  useEffect(() => {
    dispatch(getAllotmentData(profile_id));
    dispatch(getDepartmentCourses());
    dispatch(getDepartmentLecturers());
  }, [dispatch, profile_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAllotmentData(data)).then(() => {
      dispatch(getAllotmentData(profile_id));
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <section>
      <h2>Course Allotment Form</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={data.lecturer_id}
          name="lecturer_id"
          onChange={handleChange}
        >
          <option value="">Lecturers</option>
          {lecturers.map((lecturer) => (
            <option key={lecturer.id} value={lecturer.id}>{lecturer.first_name} {lecturer.last_name}</option>
          ))}
        </select>
        <select
          value={data.course_id}
          name="course_id"
          onChange={handleChange}
        >
          <option value="">Courses</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>{course.title}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>
        {allotmentInfo.length === 0 ? (
          <p>No allotments</p>
        ) : (
          <div>
            <h2>Course Allotment Table</h2>
            <table>
              <thead>
                <tr>
                  <th>Lecturers</th>
                  <th>Courses</th>
                  <th>Manage allotments</th>
                </tr>
              </thead>
              <tbody>
                {allotmentInfo.map((row) => (
                  <tr key={row.id}>
                    <td>
                      {row.lecturer.first_name} {row.lecturer.last_name}
                    </td>
                    <td>{row.course.title}</td>
                    <td>
                      <button>Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
