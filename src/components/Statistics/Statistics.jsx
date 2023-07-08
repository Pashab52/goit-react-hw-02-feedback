import { Component } from 'react';



export class Statistics extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    render() {
        return (
        <p>Statistics</p>
        // <span>Good: {this.state.good}</span>
        // <span>Neutral: {this.state.neutral}</span>
        // <span>Bad: {this.state.bad}</span>
        // <span>Total: {this.countTotalFeedback()}</span>
        // <span>
        //   Positive feedback: {this.countPositiveFeedbackPercentage() ? this.countPositiveFeedbackPercentage() : 0}%
        // </span>
        );
}

}