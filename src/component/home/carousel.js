
// 資料 [img, img, img, img]
// 每一頁代表一張圖

// 自動播放 5s 換一張圖
// 滑鼠在圖片上方時不觸發自動播放功能

// 點下圓點按鈕可以跳到指定的 Slide

import React, { Component } from 'react';
import Slider from './slider';

class Carousel extends Component {
  // constructor() {
    // super()
    // this.state = {
      
    //   showIndex: 0,
    //   preShowIndex: -1,
    //   times: 3000,
    // }
  // }

  // next = () => {
  //   let imglength = this.state.imgs.length;
  //   let showIndexs = this.state.showIndex;
  //   let preShowIndex = this.state.preShowIndex;
  //   if (showIndexs >= imglength-1) {
  //     this.setState({
  //       showIndex: 0,
  //       preShowIndex: -1
  //     })
  //   } else {
  //     this.setState({
  //       showIndex: showIndexs+1,
  //       preShowIndex: preShowIndex+1
  //     })
  //   }
  // }

  // autoplay = () => {
  //   let time = this.state.times
  //   setInterval(this.next,time)
  // }

  // componentDidMount() {
  //   // this.autoplay()
  // }

  render() {
    // style={{"position": "relative"}}
    return (
      <div>
        <Slider />
        {/* {this.state.imgs.map((item, index)=>{
          return (
            // 檢查 showIndex 給 active
            <img className={ index===this.state.showIndex ? 'active banner-item' : 'banner-item' } 
            src={item} alt="" style={{"width": "100%"}} />
          )
        })} */}
      </div>  
    )
  }

}

export default Carousel;