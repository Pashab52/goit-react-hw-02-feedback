import { Component } from 'react';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    // console.dir(event.target.dataset.btn);

    // console.dir(event.currentTarget.textContent);

    this.setState(prevState => {
      return {
        [event.target.dataset.btn]: prevState[event.target.dataset.btn] + 1,
      };
    });
  };

  countTotalFeedback() {
    let totalFeedback = 0;
    for (let key in this.state) {
      totalFeedback += this.state[key];
      console.log(totalFeedback)
    }
    return totalFeedback;
   };

  countPositiveFeedbackPercentage() {
return Math.round (this.state.good / this.countTotalFeedback() * 100)

   };

  render() {
    
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 22,
          color: '#010101',
        }}
      >
        <p>Please leave feedback</p>

        <button type="button" data-btn="good" onClick={this.addFeedback}>
          Good
        </button>
        <button type="button" data-btn="neutral" onClick={this.addFeedback}>
          Neutral
        </button>
        <button type="button" data-btn="bad" onClick={this.addFeedback}>
          Bad
        </button>

        <p>Statistics</p>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
        <span>Total: {this.countTotalFeedback()}</span>
        <span>
          Positive feedback: {this.countPositiveFeedbackPercentage() ? this.countPositiveFeedbackPercentage() : 0}%
        </span>
      </div>
    );
  }
};
