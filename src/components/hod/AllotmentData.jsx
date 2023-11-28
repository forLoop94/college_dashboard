import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllotmentData } from "../../redux/allotment_data/allotmentSlice";

export const AllotmentData = () => {
  const dispatch = useDispatch();
  const allotmentInfo = useSelector((state) => state.Allotments.allotmentData);
  const { profile_id } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(getAllotmentData(profile_id));
  }, []);

  return (
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
  );
};
