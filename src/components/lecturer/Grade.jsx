import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTargetGrade } from "../../redux/grade/gradeSlice";
import { GradeInfo } from "../grade/GradeInfo";
import { NewGrade } from "../grade/NewGrade";
import { UpdateGrade } from "../grade/UpdateGrade";

export const Grade = ({ studentId, courseId }) => {
  const dispatch = useDispatch();
  const [createGradeVar, setCreateGradeVar] = useState(false);
  const [updateGradeVar, setUpdateGradeVar] = useState(false);
  const { targetGrade } = useSelector((state) => state.Grades);

  useEffect(() => {
    dispatch(getTargetGrade({ student_id: studentId, id: courseId }));
  }, []);

  const createGrade = () => {
    setCreateGradeVar(true);
  }

  const updateGrade = () => {
    setUpdateGradeVar(true);
  }

  return (
    <section>
      {targetGrade ? <GradeInfo targetGrade={targetGrade} /> : ""}
      {targetGrade ? (
        <button type="button" onClick={() => updateGrade()}>Update grade</button>
      ) : (
        <button type="button" onClick={() => createGrade()}>Create grade</button>
      )}
      {createGradeVar && <NewGrade key={studentId} studentId={studentId} courseId={courseId} targetGrade={targetGrade}/>}
      {updateGradeVar && <UpdateGrade key={courseId} studentId={studentId} courseId={courseId} targetGrade={targetGrade}/>}
    </section>
  );
};
