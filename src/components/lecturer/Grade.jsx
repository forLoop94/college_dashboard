import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getTargetGrade } from "../../redux/grade/gradeSlice";
import { GradeInfo } from "../grade/GradeInfo";
import { NewGrade } from "../grade/NewGrade";
import { UpdateGrade } from "../grade/UpdateGrade";

export const Grade = ({ studentId, courseId, onClose }) => {
  const dispatch = useDispatch();
  const [createGradeVar, setCreateGradeVar] = useState(false);
  const [updateGradeVar, setUpdateGradeVar] = useState(false);
  const { targetGrade } = useSelector((state) => state.Grades);

  useEffect(() => {
    dispatch(getTargetGrade({ student_id: studentId, id: courseId }));
  }, [dispatch, studentId, courseId]);

  const createGrade = () => {
    setCreateGradeVar(true);
  };

  const updateGrade = () => {
    setUpdateGradeVar(true);
  };

  return (
    <section>
      <div className="d-flex justify-content-between">
        {targetGrade ? <GradeInfo targetGrade={targetGrade} /> : ""}
        {targetGrade ? (
          <button
            className="btn btn-light mt-3 mb-3"
            type="button"
            onClick={() => updateGrade()}
          >
            Update
          </button>
        ) : (
          <button
            className="btn btn-light mt-3 mb-3"
            type="button"
            onClick={() => createGrade()}
          >
            Create
          </button>
        )}
      </div>
      {createGradeVar && (
        <NewGrade
          key={studentId}
          studentId={studentId}
          courseId={courseId}
          targetGrade={targetGrade}
          onClose={onClose}
        />
      )}
      {updateGradeVar && (
        <UpdateGrade
          key={courseId}
          studentId={studentId}
          courseId={courseId}
          targetGrade={targetGrade}
          onClose={onClose}
        />
      )}
    </section>
  );
};

Grade.propTypes = {
  studentId: PropTypes.number.isRequired,
  courseId: PropTypes.number.isRequired,
};
