import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeanDetails } from "../../redux/dean/deanSlice";

export const DeanDetails = ({ deanId }) => {
  const dispatch = useDispatch();
  const { profile_id } = useSelector(state => state.user.currentUser);
  const DeanDetails = useSelector(state => state.Deans.details);

  useEffect(() => {
    dispatch(getDeanDetails(deanId || profile_id));
  }, [dispatch, profile_id, deanId]);

  return (
    <section>
      <article>
        <div>{DeanDetails.first_name}</div>
        <div>{DeanDetails.last_name}</div>
        <div>{DeanDetails.gender}</div>
      </article>
    </section>
  )
}
