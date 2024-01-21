import { FaAngleLeft } from "react-icons/fa";
import PropTypes from 'prop-types';

export const Submissions = ({ setLinkPages }) => {
  return (
    <div className="technical-pages-bg-v2 d-flex justify-content-center align-items-center p-5">
      <h1 className="text-white">Feature available in next release!</h1>
      <button
        className="inner-page-return"
        onClick={() =>
          setLinkPages({
            submission: false,
            chats: false,
          })
        }
      >
        <FaAngleLeft />
      </button>
    </div>
  )
}

Submissions.propTypes = {
  setLinkPages: PropTypes.func,
};
