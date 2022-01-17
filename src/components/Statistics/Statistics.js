import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.scss";
const Statistics = ({good, neutral, bad, total, positivePercentage}) =>
 (
    <ul className={s.List}>
        <li className={s.Item}><span className={s.Span}>Good: {good}</span></li>
        <li className={s.Item}><span className={s.Span}>Neutral: {neutral}</span></li>
        <li className={s.Item}><span className={s.Span}>Bad: {bad}</span></li>
        <li className={s.Item}><span className={s.Span}>Total:{total}</span></li>
        <li className={s.Item}><span className={s.Span}> Positive feedback: {positivePercentage.toFixed()}%</span></li>
      </ul>
 )
 Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positivePercentage: PropTypes.number.isRequired,
 };
export default Statistics; 