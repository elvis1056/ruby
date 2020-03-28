import React, { Component } from 'react';
import propTypes from 'prop-types';
import banner1 from './picture/banner/banner1.jpg';
import banner2 from './picture/banner/banner2.jpg';
import banner3 from './picture/banner/banner3.jpg';
import banner4 from './picture/banner/banner4.jpg';
import './sliderBanner.css';
import SliderDot from './sliderdot';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [banner1, banner2, banner3, banner4],
      nowLocal: 0,
    };
  }

  componentDidMount() {
    this.autoplay();
  }

  turn = (n) => {
    const { nowLocal } = this.state;
    let newnowLocal = nowLocal + n;
    if (newnowLocal < 0) {
      newnowLocal += 4;
    }
    if (newnowLocal >= 4) {
      newnowLocal -= 4;
    }
    this.setState({ nowLocal: newnowLocal });
  }

  autoplay = () => {
    const { delay } = this.props;

    this.autoPlayFlag = setInterval(() => {
      this.turn(1);
    }, delay);
  }

  pausePlay = () => {
    clearInterval(this.autoPlayFlag);
  }

  render() {
    const { nowLocal, imgs } = this.state;
    const { speed } = this.props;

    const sliderstyle = {
      width: '100%',
      left: `${-100 * nowLocal}%`,
      transitionDuration: `${speed}s`,
    };

    return (
      <div className="carousel-container" onMouseOver={this.pausePlay} onFocus={this.pausePlay} onMouseOut={this.autoplay} onBlur={this.autoplay}>
        <ul style={sliderstyle}>
          <li className="slider-item">
            <img
              src={banner1}
              alt=""
            />
          </li>
          <li className="slider-item">
            <img
              src={banner2}
              alt=""
            />
          </li>
          <li className="slider-item">
            <img
              src={banner3}
              alt=""
            />
          </li>
          <li className="slider-item">
            <img
              src={banner4}
              alt=""
            />
          </li>
        </ul>
        <SliderDot nowLocal={nowLocal} imgLength={imgs.length} turn={this.turn} />
      </div>
    );
  }
}

Slider.propTypes = {
  delay: propTypes.number,
  speed: propTypes.number,
};

Slider.defaultProps = {
  speed: 1,
  delay: 5000,
  // pause: true,
  // autoplay: true,
  // dots: true,
  // arrows: true,
  // items: [],
};
Slider.autoPlayFlag = null;

export default Slider;
