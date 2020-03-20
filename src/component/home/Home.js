import React, { Component } from 'react';
import logo from './logo-c473f739.png';
import img1 from './feature-list-img1-0d20ab19.png';
import img2 from './feature-list-img2-26e4ca80.png';
import img3 from './feature-list-img3-d0a4089e.png';
import img4 from './feature-list-img4-13321bf0.png';
import jpg1 from './vue-js-61eaa1c7.jpg';
import jpg2 from './react-js-c77f3549.jpg';
import jpg3 from './gtm-48e34654.jpg';
import show1 from './space_next_door-4dfdfeb6.png';
import show2 from './shopmatic_go-f7b86d46.png';
import show3 from './shopmatic-92ff9dcf.jpg';
import footimg1 from './press-img-3161693e.png';
import footimg2 from './cakeresume-8938f367.png'
import './Home.css';

class Home extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm fixed-top" style={{ "background-color": "#fff" }}>
          {/* navbar-brand logo-link */}
          <div className="container-fluid pl-3 pr-3" style={{ "height": "4.3125rem" }}>
            <a href="/" class="">
              <img src={logo} style={{ "max-width": "7.5rem" }} alt="網頁設計前後端課程 | 五倍紅寶石" />
            </a>

            <button class="navbar-toggler" style={{ "background-color": "#d90845" }} type="button" data-toggle="collapse" data-target="#mobile-dropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <div class="icon-bar"></div>
              <div class="icon-bar"></div>
              <div class="icon-bar"></div>
            </button>

            <ul class="collapse navbar-collapse flex-row justify-content-end mb-0" id="mobile-dropdown">
              <li className="text-center">
                <a className="nav-link" href="https://iamcoding.tw/" target="_blank" rel="noreferrer noopener">
                  <span style={{ fontSize: "1em" }}>
                    <i class="far fa-gem"></i>
                  </span>
                  線上課程
              </a>
              </li>
              <li className="text-center">
                <a className="nav-link" href="https://astro.5xruby.tw/" target="_blank" rel="noreferrer noopener">
                  <span style={{ fontSize: "1em" }}>
                    <i class="far fa-gem"></i>
                  </span>
                  ASTRO Camp
              </a>
              </li>
              <li className="text-center">
                <a className="nav-link" href="https://5xruby.tw/fullstack-landing/" target="_blank" rel="noreferrer noopener">
                  <span style={{ fontSize: "1em" }}>
                    <i class="far fa-gem"></i>
                  </span>
                  全方位課程
              </a>
              </li>


              <li className="text-center">
                <a className="nav-link" href="https://5xruby.tw/talks/" target="_blank" rel="noreferrer noopener">
                  短期課程
              </a>
              </li>
              <li className="text-center">
                <a className="nav-link" href="https://dev.5xruby.tw/" target="_blank" rel="noreferrer noopener">
                  專案開發
              </a>
              </li>
              <li className="text-center">
                <a className="nav-link" href="https://5xruby.tw/training/" target="_blank" rel="noreferrer noopener">
                  企業代訓
              </a>
              </li>
              <li className="text-center">
                <a className="nav-link" href="https://5xruby.tw/space/" target="_blank" rel="noreferrer noopener">
                  空間租借
              </a>
              </li>
              <li className="text-center">
                <a className="nav-link" href="https://5xruby.tw/posts/" target="_blank" rel="noreferrer noopener">
                  專欄文章
              </a>
              </li>
              <li className="text-center">
                <a className="nav-link" href="https://5xruby.tw/news/" target="_blank" rel="noreferrer noopener">
                  最新消息
              </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div className="header">Header</div> */}

        <div className="all-content">


          <div className="about-section"></div>


          <div className="course-recommend-section pb-4">
            <div className="container">
              <div className="row flex-column">
                <h3 className="mb-5 mt-5 pb-4 text-center position-relative">
                  關於五倍紅寶石 About 5xRuby
                  <span></span>
                </h3>
                <div className="d-flex flex-wrap">
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                    <a href="/talks" className="course-recommend-a text-decoration-none">
                      <img src={img1} alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                      <h3 class="pt-3">網頁設計<br />前後端課程教學</h3>
                      <p class="pt-3 pb-3 text-center">帶你掌握程式技能轉職工程師，程式課程從入門到進階讓你快速上手，學員好評推薦轉職課程！
                      </p>
                    </a>
                  </div>
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                    <a href="/talks" className="course-recommend-a text-decoration-none">
                      <img src={img2} alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                      <h3 class="pt-3">頂尖技術<br />網頁製作、專案開發</h3>
                      <p class="pt-3 pb-3 text-center">到行動裝置 App 工程服務、系統設計開發甚至系統架設，提供專業的建議與頂尖的技術。
                      </p>
                    </a>
                  </div>
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                    <a href="/talks" className="course-recommend-a text-decoration-none">
                      <img src={img3} alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                      <h3 class="pt-3">資訊軟體開發<br />技術顧問</h3>
                      <p class="pt-3 pb-3 text-center">協助您將現有人力快速打造為 Ruby/Rails 團隊，無須經歷繁瑣的人才招募就有即戰力！
                      </p>
                    </a>
                  </div>
                  <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                    <a href="/talks" className="course-recommend-a text-decoration-none">
                      <img src={img4} alt="網頁設計前後端課程教學 | 五倍紅寶石" />
                      <h3 class="pt-3">前後端工程師<br />社群經營</h3>
                      <p class="pt-3 pb-3 text-center">Ruby 社群經營、舉辦各類活動，促進 Ruby 社群發展，歡迎前後端工程師分享交流。
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="course-recommend-person-section">
            <div className="container">
              <div className="row flex-column">
                <div className="center-block col-12">
                  <h3 className="mb-5 mt-5 pb-4 text-center position-relative">
                    熱門網頁設計課程推薦
                    <span></span>
                  </h3>

                  <div className="d-flex flex-wrap" style={{ "margin": "0 -15px" }}>
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-4 mb-sm-5">
                      <div className>
                        <a href="/talks/vue-js" className="text-decoration-none">
                          <div className="speaker-wrap">
                            <div className="speaker-cover">
                              <img src={jpg1} alt="Vue.js 與 Vuex 前端開發實戰課程 - 假日班" />
                            </div>
                            <div class="rl-padding py-2">
                              <span className="speaker-apply">開放報名中</span>
                              <h4 class="speaker-title mt-2 mb-2 mb-sm-4">Vue.js 與 Vuex 前端開發實戰課程 - 假日班</h4>
                              <small>講師：許國政 (Kuro Hsu)</small>
                              <div class="d-flex mt-2 pt-sm-3 pt-2 pt-sm-3 speaker-border-top">
                                <small className="speaker-class-time">開課時間</small>
                                <div class="lecture-time-item">
                                  <span class="speaker-time mb-1">3 月｜假日班</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-4 mb-sm-5">
                      <div className>
                        <a href="/talks/vue-js" className="text-decoration-none">
                          <div className="speaker-wrap">
                            <div className="speaker-cover">
                              <img src={jpg2} alt="Vue.js 與 Vuex 前端開發實戰課程 - 假日班" />
                            </div>
                            <div class="rl-padding py-2">
                              <span className="speaker-apply">開放報名中</span>
                              <h4 class="speaker-title mt-2 mb-2 mb-sm-4">ReactJS 與 Webpack 全攻略入門班 - 假日班</h4>
                              <small>講師：廖珀均 / 奶綠茶 (Milkmidi)</small>
                              <div class="d-flex mt-2 pt-sm-3 pt-2 pt-sm-3 speaker-border-top">
                                <small className="speaker-class-time">開課時間</small>
                                <div class="lecture-time-item">
                                  <span class="speaker-time mb-1">4 月｜假日班</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-4 mb-sm-5">
                      <div className>
                        <a href="/talks/vue-js" className="text-decoration-none">
                          <div className="speaker-wrap">
                            <div className="speaker-cover">
                              <img src={jpg3} alt="Vue.js 與 Vuex 前端開發實戰課程 - 假日班" />
                            </div>
                            <div class="rl-padding py-2">
                              <span className="speaker-apply">開放報名中</span>
                              <h4 class="speaker-title mt-2 mb-2 mb-sm-4">Google Tag Manager 數據追蹤碼課程 - 假日班</h4>
                              <small>講師：康晉嵐 (Jason Kang)</small>
                              <div class="d-flex mt-2 pt-sm-3 pt-2 pt-sm-3 speaker-border-top">
                                <small className="speaker-class-time">開課時間</small>
                                <div class="lecture-time-item">
                                  <span class="speaker-time mb-1">5 月｜假日班</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 text-center">
                    <a class="btn btn-font-padding btn-red mt-4" href="/talks">看更多網頁課程</a>
                  </div>

                </div>

              </div>
            </div>
          </div>



          <div className="know-us-section pb-4">
            <div className="container">
              <div className="row flex-column">
                <h3 className="mb-5 mt-5 pb-4 text-center position-relative">
                  網頁課程推薦
                  <span></span>
                </h3>
              </div>
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
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-right mt-3">
                <a class="txt-red" href="./showcases">...更多案例</a>
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

        <footer className="footer-bg footer-pd pd-5">
          <div className="container">
            <div className="row d-flex">
              <div className="col-12 col-md-3">
                <a className="footer-cover" href="https://5xruby.tw/press/">
                  <img className="mb-3" src={footimg1} alt="媒體報導" />
                </a>
                <a className="footer-cover-cakeresume" href="https://www.cakeresume.com/jobs">
                  <img src={footimg2} alt="CakeResume 找工作"></img>
                  <span>找工作</span>
                </a>
              </div>
              <div className="col-12 col-md-9 mt-2">
                <div className="row">
                  <div className="col-12 align-items-center">
                    <ul className="d-flex footer-nav-items">
                      <li>
                        <a href="https://5xruby.tw/about/">關於五倍紅寶石</a>
                      </li>
                      <li>
                        <a href="https://5xruby.tw/news/categories/press/">媒體報導</a>
                      </li>
                      <li>
                        <a href="https://5xruby.tw/members/">團隊成員</a>
                      </li>
                      <li>
                        <a href="https://5xruby.tw/contacts/">聯絡詢價</a>
                      </li>
                      <li>
                        <a href="https://5xruby.tw/fag/">常見問題</a>
                      </li>
                      <li>
                        <a href="https://5xruby.tw/jobs/">工作機會</a>
                      </li>
                      <li>
                        <a href="https://github.com/5xRuby" target="_blank" rel="noopener noreferrer">開源專案</a>
                      </li>
                      <li>
                        <a href="https://5xruby.tw/privacy-policy/">隱私權條款</a>
                      </li>
                      <li>
                        <a href="https://5xruby.tw/terms-of-service/">服務條款</a>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex col-12">
                    <div className="col-12 col-md-4 col-xl-3 mt-2">
                      <div class="contact-info">
                        <div class="text-danger contact-info-tel">02-2331-5247</div>
                        <small>Mon - Fri / 09:30 - 22:00</small>
                        <br />
                        <div>
                          <a href="https://www.facebook.com/5xruby" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-facebook-f contact-icon"></i>
                          </a>
                          <a href="https://twitter.com/5xruby" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-twitter contact-icon" aria-hidden="true"></i>
                          </a>
                          <a href="https://github.com/5xruby" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-github contact-icon" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-8 col-xl-9 mt-3">
                      <div class="contact-mail-address">
                        <p>有任何問題？</p>
                        <p><a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a></p>
                        <p>地址：<a href="https://goo.gl/lz5v93" rel="noopener noreferrer" target="_blank" >10046 台北市中正區衡陽路 7 號 5 樓</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-5">
                <div className="text-center">
                  <p>
                    &copy; 2014 - 2020 五倍紅寶石股份有限公司 (5XRUBY CO., LTD)
                    <br />
                    台北市短期補習班立案 第 7594 號
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}

export default Home;
