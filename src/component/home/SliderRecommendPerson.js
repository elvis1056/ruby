import React, { Component } from 'react';
import person1 from './picture/recommend-person/victor-3ec52916.jpg';
import person2 from './picture/recommend-person/jason-e7e95cad.jpg'
import person3 from './picture/recommend-person/felix-d1d4db69.jpg';
import person4 from './picture/recommend-person/hana-4ae009cb.jpg';
import person5 from './picture/recommend-person/johnsie-7322ca81.jpg';
import person6 from './picture/recommend-person/benlin-54e253f4.jpg'
import './SliderRecommendPerson.css';
import SliderdotRecommendPerson from './SliderdotRecommendPerson';

class SliderRecommendPerson extends Component {
  constructor() {
    super()
    this.state = {
      imgs: [person1, person2, person3, person4, person5, person6],
      nowLocal: 0,
    }
  }

  turn = (n) => {
    var _n = this.state.nowLocal + n;
    if (_n < 0) {
      _n = _n + 6;
    }
    if (_n >= 6) {
      _n = _n - 6;
    }
    this.setState({ nowLocal: _n });
  }

  autoplay = () => {
    this.autoPlayFlag = setInterval(() => {
      this.turn(1)
    }, this.props.delay)
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
      <div className="container mt-2 mt-md-3 recommend-person-container" onMouseOver={this.pausePlay} onMouseOut={this.autoplay} >
        <ul style={sliderstyle}>
          <li className="slider-item">
            <div className="d-flex flex-nowrap mx-auto justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                <img src={person1} className="recommend-person-img" alt="" />
              </div>
              <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                <p className="statement">Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。
                  <br />
                  <span className="d-block text-red text-fontsize-150 mt-3 mb-2">Victor Lam</span>
                  <span className="d-block text-grey">連續創業家，自由工作者</span>
                </p>
              </div>
            </div>
          </li>
          <li className="slider-item">
            <div className="d-flex flex-nowrap mx-auto justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                <img src={person2} className="recommend-person-img" alt="" />
              </div>
              <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                <p className="statement">Eddie and his team are of the most dedicated Ruby evangelists I have ever come across. With their passion and professionalism, Ruby learners will leapfrog in their progress.
                  <br />
                  <span className="d-block text-red text-fontsize-150 mt-3 mb-2">Jason Hs</span>
                  <span className="d-block text-grey">founder of The Big Questions & TEDxTaipei</span>
                </p>
              </div>
            </div>
          </li>
          <li className="slider-item">
            <div className="d-flex flex-nowrap mx-auto justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                <img src={person3} className="recommend-person-img" alt="" />
              </div>
              <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                <p className="statement">還在尋找專業的 Ruby/Rails 師資嗎？別懷疑了，台灣最頂尖的 Rubyist 盡在「五倍紅寶石」！
                  <br />
                  <span className="d-block text-red text-fontsize-150 mt-3 mb-2">Felix Lin</span>
                  <span className="d-block text-grey">dappei.com 「搭配」網站創辦人</span>
                </p>
              </div>
            </div>
          </li>
          <li className="slider-item">
            <div className="d-flex flex-nowrap mx-auto justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                <img src={person4} className="recommend-person-img" alt="" />
              </div>
              <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                <p className="statement">慕凡和龍哥是業界數一數二的 Ruby 大師，他們不光是底子深厚，也很懂得引導、訓練學習路上遇到挫折的 Ruby/Rails 學子。很慶幸有他們的協助讓我進入紅寶石的美妙世界。
                  <br />
                  <span className="d-block text-red text-fontsize-150 mt-3 mb-2">Hana Chang</span>
                  <span className="d-block text-grey">Co-Founder and CEO of BountyHunter</span>
                </p>
              </div>
            </div>
          </li>
          <li className="slider-item">
            <div className="d-flex flex-nowrap mx-auto justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                <img src={person5} className="recommend-person-img" alt="" />
              </div>
              <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                <p className="statement">選擇程式語言很重要，但選擇優秀的導師更重要！能跟擁有多年 Ruby/Rails 實戰經驗、活躍於社群的頂尖 Rubyist 學習，將一窺程式開發殿堂之藝術！我堅信：專業事讓專業的來，而專業的「五倍紅寶石」是寶藏，就等大家來挖掘。
                  <br />
                  <span className="d-block text-red text-fontsize-150 mt-3 mb-2">John Sie</span>
                  <span className="d-block text-grey">Accuvally Inc.共同創辦人暨營運長</span>
                </p>
              </div>
            </div>
          </li>
          <li className="slider-item">
            <div className="d-flex flex-nowrap mx-auto justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                <img src={person6} className="recommend-person-img" alt="" />
              </div>
              <div className="col-8 col-sm-8 col-md-6 col-lg-6">
                <p className="statement">「五倍紅寶石」的導師們都是業界經驗豐富的實戰高手，提供的課程及咨詢絕對能讓你大幅省去自行摸索的時間。
                  <br />
                  <span className="d-block text-red text-fontsize-150 mt-3 mb-2">Ben Li</span>
                  <span className="d-block text-grey">連續創業家，自由工作者</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
        {/* <div class="avatar-partial carousel-item active carousel-item-left">
          <div class="d-flex flex-nowrap no-gutters mx-auto justify-content-center">
            <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
              <img src="/assets/images/testimoney/avatar/victor-3ec52916.jpg" class="d-block" alt="程式課程推薦 | Victor Lam | 五倍紅寶石" />
            </div>
            <div class="col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
              <p class="d-block statement">Programmer 最有價值的是經驗值，「五倍紅寶石」的導師都是社群內數一數二的資深 Rubyist，由他們來帶領學員一探 Ruby 世界的神奇之處，實在是最佳選擇。
      <br /><span class="d-block text-red large mt-3 mb-2">Victor Lam</span>
                <span class="d-block text-grey">連續創業家，自由工作者</span></p>
            </div>
          </div>
        </div> */}
        <SliderdotRecommendPerson nowLocal={nowLocal} imgLength={imgs.length} turn={this.turn} />
      </div>
    )
  }
}

SliderRecommendPerson.defaultProps = {
  speed: 1,
  delay: 5000,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
SliderRecommendPerson.autoPlayFlag = null;

export default SliderRecommendPerson;