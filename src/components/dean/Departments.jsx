import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeanDepartments } from "../../redux/department/departmentSlice";

export const Departments = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.Departments.deanDepartments);

  useEffect(() => {
    dispatch(getDeanDepartments());
  }, [dispatch]);

  if (!departments) {
    return null;
  } else {
    return (
      <section className="technical-pages-bg-v2">
        <h1 className="tech-header-v2">Departments</h1>
        <div className="tech-card-container-v2 d-flex flex-column align-items-center">
        <small className="small-note-light mb-2"></small>
          {departments.map((dept) => (
            <article className="tech-card-v2 h-25 mb-5" key={dept.id}>
              <div>Official Name: {dept.name}</div>
            </article>
          ))}
          {departments[0] && (
            <div className="position-absolute gpa">
              Number of departments: {departments[0].count}
            </div>
          )}
        </div>
      </section>
    );
  }
};
