import React from 'react'

const index = () => {
   return (
      <section className="testimonial">
        <div className="header__grid header__grid--three">
          <img className="header__grid-item" src="./images/testi-grid.png" alt="grid" />
        </div>
        <div className="cirlce-box cirlce-box--six" />
        <div className="cirlce-box cirlce-box--seven" />
        <div className="cirlce-box__radius" />
        <div className="grid wide">
          <div className="service__inner service__inner--test">
            <h3 className="heading heading--feature">TESTIMONIALS</h3><br />
            <p className="heading-desc">What People Says</p>
          </div>
          <div className="testimonial__container">
            <img src="./images/testi.png" alt="" />
            <p className="testimonial__desc">Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata
              sanctus est is the
              lorem ipsum dolor sit amet. sed diam nonumy eirmod tempor invidunt ut labore et dolore
              is the magna aliquyam.</p>
            <div className="testimonial__slider">
              <h1 className="testimonial__slider-title">John Doe</h1>
              <p className="testimonial__slider-desc">CEO, ABC Company</p>
              <div className="testimonial__dots">
                <span className="testimonial__dots-one" />
                <span className="testimonial__dots-one testimonial__dots-one--active" />
                <span className="testimonial__dots-one" />
              </div>
              <div className="testimonial__images">
                <img className="testimonial__image" src="./images/1.png" alt="" />
                <img className="testimonial__image testimonial__image--active" src="./images/3.png" alt="" />
                <img className="testimonial__image" src="./images/2.png" alt="" />
              </div>
{/*          
              <div className="testimonial__detail">
                <img src="./images/3.png" alt="author" />
                <h2 className="testimonial__detail-heading">John Doe</h2>
                <span className="testimonial__detail-skill">Web Developer</span>
                <p className="testimonial__detail-desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur provident nihil necessitatibus, dolor deserunt blanditiis cumque repudiandae accusamus dignissimos?
                </p>
                <div className="testimonial__detail-close">
                  <img src="./images/close-black.131c68af.svg" alt="" />
                </div>
              </div>
              <div className="testimonial__overlay" /> */}
            </div>
          </div>
        </div>
      </section>
   )
}

export default index
