import React, { Component } from 'react';
import img1 from './picture/feature-list/feature-list-img1-0d20ab19.png';
import img2 from './picture/feature-list/feature-list-img2-26e4ca80.png';
import img3 from './picture/feature-list/feature-list-img3-d0a4089e.png';
import img4 from './picture/feature-list/feature-list-img4-13321bf0.png';
import jpg1 from './picture/course-recommend-person/vue-js-61eaa1c7.jpg';
import jpg2 from './picture/course-recommend-person/react-js-c77f3549.jpg';
import jpg3 from './picture/course-recommend-person/gtm-48e34654.jpg';
import show1 from './picture/showcase/space_next_door-4dfdfeb6.png';
import show2 from './picture/showcase/shopmatic_go-f7b86d46.png';
import show3 from './picture/showcase/shopmatic-92ff9dcf.jpg';
import './Home.css';
import Carousel from './carousel';
import SliderRecommendPerson from './SliderRecommendPerson';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">Header</div> */}

        <div className="all-content">


          <div className="about-section"></div>
          <Carousel />

          <div className="course-recommend-section pb-4 light-grey-background">
            <div className="container">
              <div className="row flex-column">
                <h3 className="mb-5 mt-5 pb-4 text-center position-relative">
                  關於五倍紅寶石 About 5xRuby
                  <span></span>
                </h3>
                <div className="d-flex flex-wrap">
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <a href="/talks" className="course-recommend-a text-decoration-none">
                      <img src={img1} alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                      <h3 className="pt-3">網頁設計<br />前後端課程教學</h3>
                      <p className="pt-3 pb-3 text-center">帶你掌握程式技能轉職工程師，程式課程從入門到進階讓你快速上手，學員好評推薦轉職課程！
                      </p>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <a href="/talks" className="course-recommend-a text-decoration-none">
                      <img src={img2} alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                      <h3 className="pt-3">頂尖技術<br />網頁製作、專案開發</h3>
                      <p className="pt-3 pb-3 text-center">到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。
                      </p>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <a href="/talks" className="course-recommend-a text-decoration-none">
                      <img src={img3} alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                      <h3 className="pt-3">資訊軟體開發<br />技術顧問</h3>
                      <p className="pt-3 pb-3 text-center">協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！
                      </p>
                    </a>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <a href="/talks" className="course-recommend-a text-decoration-none">
                      <img src={img4} alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                      <h3 className="pt-3">前後端工程師<br />社群經營</h3>
                      <p className="pt-3 pb-3 text-center">Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="course-recommend-lecture-section">
            <div className="container">
              <div className="row flex-column">
                <div className="center-block col-12">
                  <h3 className="mb-5 mt-5 pb-4 text-center position-relative">
                    熱門網頁設計課程推薦
                    <span></span>
                  </h3>

                  <div className="d-flex flex-wrap" style={{ "margin": "0 -15px" }}>
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-4 mb-sm-5">
                      <div>
                        <a href="/talks/vue-js" className="text-decoration-none">
                          <div className="speaker-wrap">
                            <div className="speaker-cover">
                              <img src={jpg1} alt="Vue.js 與 Vuex 前端開發實戰課程 - 假日班" />
                            </div>
                            <div className="rl-padding py-2">
                              <span className="speaker-apply">開放報名中</span>
                              <h4 className="speaker-title mt-2 mb-2 mb-sm-4">Vue.js 與 Vuex 前端開發實戰課程 - 假日班</h4>
                              <small>講師：許國政 (Kuro Hsu)</small>
                              <div className="d-flex mt-2 pt-sm-3 pt-2 pt-sm-3 speaker-border-top">
                                <small className="speaker-class-time">開課時間</small>
                                <div className="lecture-time-item">
                                  <span className="speaker-time mb-1">3 月｜假日班</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-4 mb-sm-5">
                      <div>
                        <a href="/talks/vue-js" className="text-decoration-none">
                          <div className="speaker-wrap">
                            <div className="speaker-cover">
                              <img src={jpg2} alt="Vue.js 與 Vuex 前端開發實戰課程 - 假日班" />
                            </div>
                            <div className="rl-padding py-2">
                              <span className="speaker-apply">開放報名中</span>
                              <h4 className="speaker-title mt-2 mb-2 mb-sm-4">ReactJS 與 Webpack 全攻略入門班 - 假日班</h4>
                              <small>講師：廖珀均 / 奶綠茶 (Milkmidi)</small>
                              <div className="d-flex mt-2 pt-sm-3 pt-2 pt-sm-3 speaker-border-top">
                                <small className="speaker-class-time">開課時間</small>
                                <div className="lecture-time-item">
                                  <span className="speaker-time mb-1">4 月｜假日班</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-4 mb-sm-5">
                      <div>
                        <a href="/talks/vue-js" className="text-decoration-none">
                          <div className="speaker-wrap">
                            <div className="speaker-cover">
                              <img src={jpg3} alt="Vue.js 與 Vuex 前端開發實戰課程 - 假日班" />
                            </div>
                            <div className="rl-padding py-2">
                              <span className="speaker-apply">開放報名中</span>
                              <h4 className="speaker-title mt-2 mb-2 mb-sm-4">Google Tag Manager 數據追蹤碼課程 - 假日班</h4>
                              <small>講師：康晉嵐 (Jason Kang)</small>
                              <div className="d-flex mt-2 pt-sm-3 pt-2 pt-sm-3 speaker-border-top">
                                <small className="speaker-class-time">開課時間</small>
                                <div className="lecture-time-item">
                                  <span className="speaker-time mb-1">5 月｜假日班</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 text-center pb-5">
                    <a className="btn btn-font-padding btn-red mt-4" href="/talks">看更多網頁課程</a>
                  </div>

                </div>

              </div>
            </div>
          </div>



          <div className="course-recommend-person-section pb-4 light-grey-background">
            <div className="">
              <div className="pt-1 flex-column">
                <h3 className="mb-5 mt-5 pb-4 text-center position-relative">
                  網頁課程推薦
                  <span></span>
                </h3>
              </div>
              <SliderRecommendPerson />
            </div>
          </div>


          <div className="showcase-section pb-4">
            <div className="container">
              <div className="row flex-column">
                <h3 className="mb-4 mt-5 pb-4 text-center position-relative">
                  案例作品 Showcase
                  <span></span>
                </h3>
                <div className="d-flex flex-wrap">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4">
                    <div className="showcase-item">
                      <a className="text-decoration-none showcase-recommend-a" href="https://spacenextdoor.com/" target="_blank" rel="noopener noreferrer">
                        <div className="showcase-cover">
                          <img src={show1} alt="SpaceNextDoor" />
                          <h4 className="rl-padding mt-3 mb-3">SpaceNextDoor</h4>
                          <div className="rl-padding">
                            <p className="mb-5">Space Next Door is inspired by the sharing economy in which we hope to
                            encourage people to put up their unused space so that users looking for personal or business storage space
                            have better options, closer to where they need it. We are striving to build a trusted community marketplace
            for you to list, discover and book the nearest and best space at affordable prices.</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4">
                    <div className="showcase-item">
                      <a className="text-decoration-none showcase-recommend-a" href="https://itunes.apple.com/in/app/shopmatic-go/id1174712646?mt=8" target="_blank" rel="noopener noreferrer">
                        <div className="showcase-cover">
                          <img src={show2} alt="Shopmatic Go app" />
                          <h4 className="rl-padding mt-3 mb-3">Shopmatic Go app</h4>
                          <div className="rl-padding">
                            <p className="mb-5">Shopmatic Go is an exciting online platform where you can create a unique and
            comprehensive online store for your business, in a matter of minutes.</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="rl-padding col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pt-4">
                    <div className="showcase-item">
                      <a className="text-decoration-none showcase-recommend-a" href="https://goshopmatic.com/in/" target="_blank" rel="noopener noreferrer">
                        <div className="showcase-cover">
                          <img src={show3} alt="跨境電子商務 Shopmatic" />
                          <h4 className="rl-padding mt-3 mb-3">跨境電子商務 Shopmatic</h4>
                          <div className="rl-padding">
                            <p className="mb-5">Shopmatic manages the entire ecosystem for anyone wanting to sell online. We
                            go the extra mile to ensure that we help you in every step of the process to grow your business online -
                            from developing your own unique webstore, to listing you on marketplaces and social channels, to providing
            you insights on how to sell online.</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right mt-3">
                <a className="txt-red" href="./showcases">...更多案例</a>
              </div>
            </div>
          </div>

        </div>

        <div className="know-us-section pb-4">
          <div className="container">
            <div className="row flex-column">
              <div className="center-block col-12">
                <h3 className="mb-2 mt-3 text-center position-relative">
                  想更瞭解我們嗎？
                  <span></span>
                </h3>
                <p className="text-center mt-4 know-us-text">
                  您可以看看
                  <a href="https://5xruby.tw/faq/">常見問題</a>
                  或者直接
                  <a href="https://5xruby.tw/contacts/">線上洽詢</a>，會有親切的客服人員回答您的問題，
                  <br />
                  也可以透過社群網站隨時關注我們的動態。
                </p>

                <div></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;
