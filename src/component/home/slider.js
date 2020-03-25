import React, { Component } from 'react';
import banner1 from './picture/banner/banner1.jpg';
import banner2 from './picture/banner/banner2.jpg';
import banner3 from './picture/banner/banner3.jpg';
import banner4 from './picture/banner/banner4.jpg';
import './sliderBanner.css';
import SliderDot from './sliderdot';

class Slider extends Component {
  constructor() {
    super()
    this.state = {
      imgs: [banner1, banner2, banner3, banner4],
      nowLocal: 0,
    }
  }

  turn = (n) => {
    var _n = this.state.nowLocal + n;
    if(_n < 0) {
      _n = _n + 4;
    }
    if(_n >= 4) {
      _n = _n - 4;
    }
    this.setState({nowLocal: _n});
  }

  autoplay = () => {
    this.autoPlayFlag = setInterval(()=>{
      this.turn(1)
    },this.props.delay)
  }

  pausePlay = () => {
    clearInterval(this.autoPlayFlag)
  }

  componentDidMount() {
    this.autoplay()
  }

  render() {
    let { nowLocal, imgs } = this.state

    let sliderstyle = { 
      "width": "100%",
      left: -100 * this.state.nowLocal + "%",
      transitionDuration: this.props.speed + "s",
    }

    return (
      <div className="carousel-container" onMouseOver={this.pausePlay} onMouseOut={this.autoplay} >
        <ul style={sliderstyle}>
          <li className="slider-item">
            <img 
              src={banner1} alt="" />
          </li>
          <li className="slider-item">
            <img 
              src={banner2} alt="" />
          </li>
          <li className="slider-item">
            <img 
              src={banner3} alt="" />
          </li>
          <li className="slider-item">
            <img 
              src={banner4} alt="" />
          </li>
        </ul>
        <SliderDot nowLocal={nowLocal} imgLength={imgs.length} turn={this.turn} />
      </div>
    )
  }
}

Slider.defaultProps = {
  speed: 1,
  delay: 5000,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
Slider.autoPlayFlag = null;

export default Slider;