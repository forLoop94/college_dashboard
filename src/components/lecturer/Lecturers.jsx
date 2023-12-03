import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getLecturers } from '../../redux/lecturer/lecturerSlice';

export const Lecturers = () => {
  const dispatch = useDispatch();
  const lecturers = useSelector((state) => state.Lecturers.lecturers);

  useEffect(() => {
    dispatch(getLecturers());
  }, [dispatch])

  if (lecturers.length === 0) {
    return "No lecturers yet!"
  } else {
    return (
      <div>
        <h1>lecturers page</h1>
        {lecturers.map((lecturer) => (
          <div key={lecturer.id}>
            <h2>{lecturer.first_name}</h2>
            <div>{lecturer.last_name}</div>
          </div>
        ))}
      </div>
    )
  }
}
