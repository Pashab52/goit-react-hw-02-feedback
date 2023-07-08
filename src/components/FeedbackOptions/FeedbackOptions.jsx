import { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component{

    render() {
        return (
            <div>
          {this.props.options.map(option => {
            return (
              <button
                type="button"
                // data-btn={option}
                key={option}
                onClick={()=>this.props.onLeaveFeedback(option)}
              >
                {option}
              </button>
            );
          })}
        </div>)

}


}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};