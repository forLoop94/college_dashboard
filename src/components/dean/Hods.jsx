import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getHodsList } from "../../redux/dean/deanSlice";

export const Hods = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHodsList())
  }, [dispatch])


  return (
    <div>Hods</div>
  )
}
