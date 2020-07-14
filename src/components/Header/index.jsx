import React from 'react'

const index = () => {
   return (
      <header className="header">
        <div className="header__bg">
          <img src="./images/header-bg.png" alt="" />
        </div>
        <div className="header__grid">
          <img className="header__grid-item" src="./images/header-grid-2.png" alt="" />
        </div>
        <div className="header__grid header__grid--two">
          <img className="header__grid-item" src="./images/header-grid.png" alt="" />
        </div>
        <div className="cirlce-box" />
        <div className="cirlce-box cirlce-box--two" />
        <div className="cirlce-box cirlce-box--three" />
        <div className="cirlce-box cirlce-box--four" />
        <div className="cirlce-box cirlce-box--five" />
        <div className="cirlce-box cirlce-box--eight" />
        <div className="grid wide">
          <div className="header__inner">
            <div className="header__logo">
              <a href="#!">
                <img className="header__logo-image" src="./images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__menu hide-on-mobile-tablet">
              <nav className="header__menu-navbar">
                <ul className="header__menu-list">
                  <li className="header__menu-item">
                    <a className="header__menu-link header__menu-link--active" href="#!">Home</a>
                  </li>
                  <li className="header__menu-item">
                    <a className="header__menu-link" href="#!">About us</a>
                  </li>
                  <li className="header__menu-item">
                    <a className="header__menu-link" href="#!">Services</a>
                  </li>
                  <li className="header__menu-item">
                    <a className="header__menu-link" href="#!">News</a>
                  </li>
                  <li className="header__menu-item">
                    <a className="header__menu-link" href="#!">Resources</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* mobile */}
            <div className="nav__mobile">
              <div className="nav__mobile-icon">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14 NavBar_icon__13JXR" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                  </path>
                </svg>
              </div>
              <div className="navbar__overlay" />
              <nav className="navbar__mobile-wrapper">
                <div className="mobile__author">
                  <img className="mobile__author-image" src="./images/logo.png" alt="" />
                  <div className="mobile__author-close">
                    <img src="./images/close-black.131c68af.svg" alt="" />
                  </div>
                </div>
                <ul className="navbar__mobile-list">
                  <li className="navbar__mobile-item">
                    <a href="#!" className="navbar__mobile-link">Home</a>
                  </li>
                  <li className="navbar__mobile-item">
                    <a href="#!" className="navbar__mobile-link">About us</a>
                  </li>
                  <li className="navbar__mobile-item">
                    <a href="#!" className="navbar__mobile-link">Services</a>
                  </li>
                  <li className="navbar__mobile-item">
                    <a href="#!" className="navbar__mobile-link">News</a>
                  </li>
                  <li className="navbar__mobile-item">
                    <a href="#!" className="navbar__mobile-link">Resources</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* End mobile */}
          </div>
          <div className="row header__banner-container">
            <div className="col l-7 m-12 c-12">
              <div className="header__banner-wrapper">
                <div className="header__banner">
                  <div className="header__banner-title">Sharing Vitality </div>
                  <div className="header__banner-title header__banner-title--strong">Through Designing</div>
                  <span className="header__banner-desc">clean design and advanced digital solutions</span>
                  <div className="header__banner-btns">
                    <a href="#!" className="btn btn--rounded btn--active btn--spacing btn--sm">Explore More</a>
                    <a href="#!" className="btn btn--rounded btn--sm">See Live Damo</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-5 m-12 c-12 hide-on-mobile-tablet">
              <div className="header__banner-image">
                <img src="./images/2905211.png" alt="banner" />
                <img className="header__banner-grid" src="./images/Group 224.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
   )
}

export default index
