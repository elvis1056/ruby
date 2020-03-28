import React from 'react';
import logo from './logo-c473f739.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm fixed-top" style={{ backgroundColor: '#fff' }}>
    {/* navbar-brand logo-link */}
    <div className="container-fluid pl-3 pr-3" style={{ height: '4.3125rem' }}>
      <a href="/" className="">
        <img src={logo} style={{ maxWidth: '7.5rem' }} alt="網頁設計前後端課程 | 五倍紅寶石" />
      </a>

      <button className="navbar-toggler" style={{ backgroundColor: '#d90845' }} type="button" data-toggle="collapse" data-target="#mobile-dropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <div className="icon-bar" />
        <div className="icon-bar" />
        <div className="icon-bar" />
      </button>

      <ul className="collapse navbar-collapse flex-row justify-content-end mb-0" id="mobile-dropdown">
        <li className="text-center">
          <a className="nav-link" href="https://iamcoding.tw/" target="_blank" rel="noreferrer noopener">
            <span style={{ fontSize: '1em' }}>
              <i className="far fa-gem" />
            </span>
            線上課程
          </a>
        </li>
        <li className="text-center">
          <a className="nav-link" href="https://astro.5xruby.tw/" target="_blank" rel="noreferrer noopener">
            <span style={{ fontSize: '1em' }}>
              <i className="far fa-gem" />
            </span>
            ASTRO Camp
          </a>
        </li>
        <li className="text-center">
          <a className="nav-link" href="https://5xruby.tw/fullstack-landing/" target="_blank" rel="noreferrer noopener">
            <span style={{ fontSize: '1em' }}>
              <i className="far fa-gem" />
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
);

export default Navbar;
