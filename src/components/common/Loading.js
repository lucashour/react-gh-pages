import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Loading.scss';

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }
  componentDidMount() {
    const stopper = this.props.text + '...';

    this.interval = window.setInterval(() => {
      this.setState((currentState) => {
        return {
          text: currentState.text === stopper ? 'Loading' : currentState.text + '.'
        }
      });
    }, this.props.speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p className='Loading'>
        {this.state.text}
      </p>
    );
  }
}

Loading.propTypes = {
  text:  PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};
