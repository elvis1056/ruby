import React, { Component } from 'react';
import propTypes from 'prop-types';

class SliderdotRecommendPerson extends Component {
  handleSliderDotClick = (i) => {
    const { nowLocal, turn } = this.props;
    const option = i - nowLocal;
    turn(option);
  };

  render() {
    const dotArray = [];
    const { imgLength } = this.props;
    for (let i = 0; i < imgLength; i += 1) {
      dotArray[i] = (
        /* eslint-disable-next-line */
        <span key={i} className="slider-dot" onClick={(e) => this.handleSliderDotClick(i, e)} />
      );
    }

    return (
      <div className="slider-dots-recommend-person-wrap">
        {dotArray}
      </div>
    );
  }
}

SliderdotRecommendPerson.propTypes = {
  nowLocal: propTypes.number.isRequired,
  turn: propTypes.func.isRequired,
  imgLength: propTypes.number.isRequired,
};

export default SliderdotRecommendPerson;
