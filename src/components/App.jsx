import { Component } from 'react';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (event) => {
    // console.dir(event);
    console.dir(event.target.dataset.btn);
    // console.dir(event.currentTarget.dataset);
    this.setState(prevState => {
   
    

      return { [event.target.dataset.btn]: prevState[event.target.dataset.btn] + 1 };
    })
      
      
      

// this.setState({good: 1});


   
  }

  render() {
   
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
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
      </div>
    );
  }
};
