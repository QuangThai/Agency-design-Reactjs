import React from 'react'

const index = () => {
   return (
      <section className="about-us">
        <div className="about-us__wrapper">
          <div className="about-us__left">
            <img src="./images/about.png" alt="" />
          </div>
          <div className="about-us__right">
            <h5 className="heading">About Me</h5>
            <h3 className="about-us__right-title">Why hire us for your next project?</h3>
            <p className="about-us__right-desc">We are Creative Director and UI/UX Designer from New York, working in web
              development and print media. We enjoy turning
              complex problems into simple, beautiful and intuitive designs</p>
            <p className="about-us__right-desc about-us__right-desc--spacing">Our job is to build your website so that it
              is functional and
              user-friendly but at the same time attractive.</p>
            <a href="#!" className="btn btn--download btn--active">Download CV</a>
          </div>
        </div>
        <div className="about-us__circle about-us__wrapper">
          <ul className="about-us__circle-list">
            <li className="about-us__circle-item">
              <svg>
                <circle cx={70} cy={70} r={70} />
                <circle cx={70} cy={70} r={70} className="about-us__circle--design" />
              </svg>
              <div className="about-us__circle__number">
                <h2 className="about-us__circle-percent">50%</h2>
                <p className="about-us__circle-title">Web Design</p>
              </div>
            </li>
            <li className="about-us__circle-item">
              <svg>
                <circle cx={70} cy={70} r={70} />
                <circle cx={70} cy={70} r={70} className="about-us__circle--developer" />
              </svg>
              <div className="about-us__circle__number">
                <h2 className="about-us__circle-percent">75%</h2>
                <p className="about-us__circle-title">Development</p>
              </div>
            </li>
            <li className="about-us__circle-item">
              <svg>
                <circle cx={70} cy={70} r={70} />
                <circle cx={70} cy={70} r={70} className="about-us__circle--web" />
              </svg>
              <div className="about-us__circle__number">
                <h2 className="about-us__circle-percent">20%</h2>
                <p className="about-us__circle-title">Web Design</p>
              </div>
            </li>
            <li className="about-us__circle-item">
              <svg>
                <circle cx={70} cy={70} r={70} />
                <circle cx={70} cy={70} r={70} className="about-us__circle--user" />
              </svg>
              <div className="about-us__circle__number">
                <h2 className="about-us__circle-percent">50%</h2>
                <p className="about-us__circle-title">User experience</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
   )
}

export default index
