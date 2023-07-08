import { Component } from 'react';
import PropTypes from 'prop-types';


export class Statistics extends Component{


    render() {
      return (
        <div>
          <p>Statistics</p>

          <span>Good: {this.props.good} </span>
          <span>Neutral: {this.props.neutral}</span>
          <span>Bad: {this.props.bad}</span>
          <span>Total: {this.props.total}</span>
          <span> Positive feedback: {this.props.positivePercentage}%</span>
        </div>
      );
}
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};