import "../../styles/loading-screen.css";
import bookTree from "../../assets/book-tree.png";

export const LoadingScreen = () => {
  return (
    <section className="d-flex load-screen-container justify-content-center align-items-center h-100 w-100">
      <div className="screen-content">
        <div className="load-statement mb-3">Loading your personal data, this might take a minute...</div>
        <div className="d-flex justify-content-center mb-3 spinner-container">
          <div className="spinner"></div>
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="load-screen-photo"
            src={bookTree}
            alt="loading screen image"
          />
        </div>
      </div>
    </section>
  );
};
