import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getHodDetails } from "../../redux/hod/hodSlice";

export const HodDetails = ({ hodId }) => {
  const dispatch = useDispatch();
  const { profile_id } = useSelector(state => state.user.currentUser);
  const hodDetails = useSelector(state => state.Hods.details);

  useEffect(() => {
    dispatch(getHodDetails(hodId || profile_id));
  }, [dispatch, profile_id, hodId]);

  return (
    <section>
      <article>
        <div>{hodDetails.first_name}</div>
        <div>{hodDetails.last_name}</div>
        <div>{hodDetails.gender}</div>
      </article>
    </section>
  )
}
