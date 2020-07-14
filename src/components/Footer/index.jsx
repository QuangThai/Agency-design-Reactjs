import React from 'react'

const index = () => {
   return (
      <>
          <footer className="footer">
          <div className="cirlce-box cirlce-box--nine" />
          <div className="cirlce-box__radius cirlce-box__radius--footer" />
          <div className="grid wide">
            <div className="footer__wrapper">
              <div className="footer__wrapper-left">
                <img className="footer__wrapper-logo" src="./images/logo-footer.png" alt="" />
                <div className="footer__wrapper-desc">Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata
                  sanctus est is the is the magna aliquyam.</div>
              </div>
              <div className="footer__wrapper-right">
                <h4 className="footer__wrapper-heading">We are digital designer living in United States.
                  Apart from eating burger</h4>
                <div className="footer__wrapper-info">
                  <ul className="footer__wrapper-list">
                    <li className="footer__wrapper-item">
                      <h3 className="footer__wrapper-item-title">Send Email</h3>
                      <span className="footer__wrapper-item-info">info@portfolio.com</span>
                    </li>
                    <li className="footer__wrapper-item">
                      <h3 className="footer__wrapper-item-title">make call</h3>
                      <div className="footer__wrapper-item-info">+123 456 7890</div>
                      <div className="footer__wrapper-item-info">+123 456 7890</div>
                    </li>
                    <li className="footer__wrapper-item">
                      <h3 className="footer__wrapper-item-title">Get in touch</h3>
                      <span className="footer__wrapper-item-info">123/A, Hamburger City
                        New York, USA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer__copy-right">2019 All Rights Reserved</div>
        <div id="back-to-top" className="back-to-top">
          <svg className="back-to-top__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z">
            </path>
          </svg>
        </div>
      </>
   )
}

export default index
