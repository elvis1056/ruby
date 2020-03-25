import React, { Component } from 'react';

class SliderDot extends Component {

  handleSliderDotClick = (i,e) => {
    let option = i - this.props.nowLocal;
    this.props.turn(option);
  }

  render() {
    let dotArray = []
    let { imgLength } = this.props
    for (let i = 0; i<imgLength; i++) {
      dotArray[i] = (
        <span key={i} className="slider-dot" onClick={(e)=>this.handleSliderDotClick(i,e)}></span>
      )
    }

    return (
      <div className="slider-dots-wrap">
        {dotArray}
      </div>
    )
  }
}

export default SliderDot;