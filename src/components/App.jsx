import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  options = Object.keys(this.state);

  addFeedback = option => {

//  this.setState(prevState => ({
//    [event.target.dataset.btn]: prevState[event.target.dataset.btn] + 1,
//  }));

    this.setState(prevState => ({
    
        [option]: prevState[option] + 1,
      
    }));
  };

  countTotalFeedback() {
    let totalFeedback = 0;
    for (let key in this.state) {
      totalFeedback += this.state[key];
    }
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

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

        


<FeedbackOptions options={this.options} onLeaveFeedback={this.addFeedback} />
       
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={
            this.countPositiveFeedbackPercentage()
              ? this.countPositiveFeedbackPercentage()
              : 0
          }
        />
      </div>
    );
  }
};
