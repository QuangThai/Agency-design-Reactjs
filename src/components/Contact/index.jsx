import React from 'react'

const index = () => {
   return (
      <section className="contact">
        <img className="contact__image-grid" src="./images/grid-contact.png" alt="" />
        <div className="grid wide">
          <div className="service__inner">
            <h3 className="heading heading--feature heading--font">Contact me</h3><br />
            <p className="heading-desc">Send Us a Message</p>
          </div>
        </div>
        <div className="contact__wrapper">
          <form action="#!" method="post" className="contact__wrapper-form">
            <div className="input-group input-group--margin">
              <input type="text" name="username" placeholder="Name" />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="input-group  input-group--margin">
              <input type="number" name="phone" placeholder="Phone#" />
            </div>
            <div className="input-group">
              <select name="budget">
                <option value>Budget</option>
                <option value>budget</option>
                <option value>budget</option>
                <option value>budget</option>
              </select>
            </div>
            <div className="input-group input-group--textarea">
              <textarea name="message" cols={5} rows={5} placeholder="Message" defaultValue={""} />
            </div>
            <button type="submit" className="btn btn--active btn--send btn--message">Send message</button>
          </form>
        </div>
      </section>
   )
}

export default index
