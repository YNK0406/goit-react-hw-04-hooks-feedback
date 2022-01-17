import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from './FeedbackItem';
import { nanoid } from 'nanoid';
import s from "./Feedback.module.scss";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.List}>
      {options.map(option => (
        <FeedbackItem
          key={nanoid()}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;