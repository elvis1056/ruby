import React from 'react';
import { Link } from 'react-router-dom';
import footimg1 from './home/picture/footer/press-img-3161693e.png';
import footimg2 from './home/picture/footer/cakeresume-8938f367.png';

const Footer = () => (
  <footer className="footer-bg footer-pd pd-5">
    <div className="container">
      <div className="row d-flex">
        <div className="col-12 col-md-3">
          <a className="footer-cover" href="https://5xruby.tw/press/">
            <img className="mb-3" src={footimg1} alt="媒體報導" />
          </a>
          <a className="footer-cover-cakeresume" href="https://www.cakeresume.com/jobs">
            <img src={footimg2} alt="CakeResume 找工作" />
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
                  <Link to="/contacts">聯絡詢價</Link>
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
                <div className="contact-info">
                  <div className="text-danger contact-info-tel">02-2331-5247</div>
                  <small>Mon - Fri / 09:30 - 22:00</small>
                  <br />
                  <div>
                    <a href="https://www.facebook.com/5xruby" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-facebook-f contact-icon" />
                    </a>
                    <a href="https://twitter.com/5xruby" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-twitter contact-icon" aria-hidden="true" />
                    </a>
                    <a href="https://github.com/5xruby" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-github contact-icon" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-9 mt-3">
                <div className="contact-mail-address">
                  <p>有任何問題？</p>
                  <p><a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a></p>
                  <p>
                    地址：
                    <a href="https://goo.gl/lz5v93" rel="noopener noreferrer" target="_blank">10046 台北市中正區衡陽路 7 號 5 樓</a>
                  </p>
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
);

export default Footer;
