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
        <div className="tech-card-container-v2 d-flex justify-content-center flex-column gap-3 align-items-center">
          {departments.map((dept) => (
            <article className="tech-card-v2 h-25" key={dept.id}>
              <div>Official Name: {dept.name}</div>
            </article>
          ))}
          {departments[0] && (
            <article>Number of departments: {departments[0].count}</article>
          )}
        </div>
      </section>
    );
  }
};
