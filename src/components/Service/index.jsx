import React from 'react'

const index = () => {
   return (
      <section className="service">
        <div className="grid wide">
          <div className="service__inner">
            <h3 className="heading heading--feature">MY SERVICES</h3><br />
            <p className="heading-desc">Our Provided Features &amp; Expertise</p>
          </div>
          <div className="service__wrapper">
            <div className="service__wrapper-left">
              <div className="service__icon">
                <img src="./images/icon-1.png" alt="icon" />
              </div>
              <div className="service__content">
                <div className="service__title">Web Design</div>
                <div className="service__line">
                  <span className="service__line-one service__line-one--spacing" />
                  <span className="service__line-one service__line-one--spacing" />
                  <span className="service__line-one" />
                </div>
                <div className="service__desc">Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet.
                  sed diam eirmod tempor dolore.</div>
                <a href="#!" className="btn btn--active btn--know btn--white">Know More
                  <svg className="service__icon-right" role="img" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="arrowRightIconTitle" stroke="#fff" strokeWidth={1} strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#fff">
                    <title>Arrow Right</title>
                    <path d="M15 18l6-6-6-6" />
                    <path d="M3 12h17" />
                    <path strokeLinecap="round" d="M21 12h-1" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="service__wrapper-right">
              <h1 className="service__wrapper-percent">95%</h1>
              <div className="service__wrapper-progresbar" style={{"--percent": '95%'}} />
              <h3 className="service__wrapper-title">web design</h3>
              <span className="service__wrapper-skill">HTML, CSS, Jquery</span>
            </div>
          </div>
          <div className="service__wrapper">
            <div className="service__wrapper-left is--active">
              <div className="service__icon is--active">
                <img src="./images/icon-2.png" alt="icon" />
              </div>
              <div className="service__content">
                <div className="service__title is--active">Graphic Design</div>
                <div className="service__line">
                  <span className="service__line-one service__line-one--spacing is--active" />
                  <span className="service__line-one service__line-one--spacing is--active" />
                  <span className="service__line-one is--active" />
                </div>
                <div className="service__desc is--active">Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor
                  sit amet.
                  sed diam eirmod tempor dolore.</div>
                <a href="#!" className="btn btn--active btn--know btn--white is--active">Know More
                  <svg className="service__icon-right" role="img" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="arrowRightIconTitle" stroke="#000" strokeWidth={1} strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000">
                    <title>Arrow Right</title>
                    <path d="M15 18l6-6-6-6" />
                    <path d="M3 12h17" />
                    <path strokeLinecap="round" d="M21 12h-1" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="service__wrapper-right">
              <h1 className="service__wrapper-percent">85%</h1>
              <div className="service__wrapper-progresbar service__wrapper-progresbar--grapfic" style={{"--percent": '85%'}}>
              </div>
              <h3 className="service__wrapper-title">Graphic Design</h3>
              <span className="service__wrapper-skill">Photoshop, Illustrator</span>
            </div>
          </div>
          <div className="service__wrapper">
            <div className="service__wrapper-left">
              <div className="service__icon">
                <img src="./images/icon-3.png" alt="icon" />
              </div>
              <div className="service__content">
                <div className="service__title">Web Developement</div>
                <div className="service__line">
                  <span className="service__line-one service__line-one--spacing" />
                  <span className="service__line-one service__line-one--spacing" />
                  <span className="service__line-one" />
                </div>
                <div className="service__desc">Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet.
                  sed diam eirmod tempor dolore.</div>
                <a href="#!" className="btn btn--active btn--know btn--know btn--white">Know More
                  <svg className="service__icon-right" role="img" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="arrowRightIconTitle" stroke="#fff" strokeWidth={1} strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#fff">
                    <title>Arrow Right</title>
                    <path d="M15 18l6-6-6-6" />
                    <path d="M3 12h17" />
                    <path strokeLinecap="round" d="M21 12h-1" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="service__wrapper-right">
              <h1 className="service__wrapper-percent">70%</h1>
              <div className="service__wrapper-progresbar service__wrapper-progresbar--web" style={{"--percent": '70%'}} />
              <h3 className="service__wrapper-title">Web Developement</h3>
              <span className="service__wrapper-skill">HTML, CSS, Jquery</span>
            </div>
          </div>
          <div className="service__btn">
            <a href="#!" className="btn btn--active btn--radius btn--view">View more</a>
          </div>
        </div>
      </section>
   )
}

export default index
