import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getlecturerDetails } from '../../redux/lecturer/lecturerSlice';

export const LecturerDetails = ({ lecturerId }) => {
  const dispatch = useDispatch();
  const { profile_id } = useSelector(state => state.user.currentUser);
  const lecturerDetails = useSelector(state => state.Lecturers.details);

  useEffect(() => {
    dispatch(getlecturerDetails(lecturerId || profile_id));
  }, [dispatch, profile_id, lecturerId]);

  return (
    <section>
      <article>
        <div>{lecturerDetails.first_name}</div>
        <div>{lecturerDetails.last_name}</div>
        <div>{lecturerDetails.gender}</div>
      </article>
    </section>
  )
}
