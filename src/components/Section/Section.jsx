import { Component } from 'react';
import PropTypes from 'prop-types';


export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // який тип вказувати на children? element, node, object?
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        {this.props.children}
      </div>
    );
  }
};


