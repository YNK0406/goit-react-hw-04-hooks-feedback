import PropTypes from 'prop-types';
import s from "./Feedback.module.scss";

const FeedbackItem = ({ option, onLeaveFeedback }) => {
  return (
    <li className={s.Item} >
      <button className={s.Button} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    </li>
  );
};

FeedbackItem.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackItem;