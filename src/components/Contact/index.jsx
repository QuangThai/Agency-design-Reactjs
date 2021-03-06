/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";

const index = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    phone: "",
    budget: null,
    message: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, budget, message } = state;
    console.log({ username, email, phone, budget, message });
  };

  return (
    <section className="contact">
      <img
        className="contact__image-grid"
        src="./images/grid-contact.png"
        alt=""
      />
      <div className="grid wide">
        <div className="service__inner">
          <h3 className="heading heading--feature heading--font">Contact me</h3>
          <br />
          <p className="heading-desc">Send Us a Message</p>
        </div>
      </div>
      <div className="contact__wrapper">
        <form
          action="#!"
          method="post"
          className="contact__wrapper-form"
          onSubmit={handleSubmit}
        >
          <div className="input-group input-group--margin">
            <input
              type="text"
              value={state.username}
              onChange={handleChange}
              name="username"
              placeholder="Name"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              value={state.email}
              onChange={handleChange}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="input-group  input-group--margin">
            <input
              type="text"
              value={state.phone}
              onChange={handleChange}
              name="phone"
              placeholder="Phone#"
            />
          </div>
          <div className="input-group">
            <select name="budget" onChange={handleChange}>
              <option defaultValue>Budget</option>
              <option value={1}>budget 1</option>
              <option value={2}>budget 2</option>
              <option value={3}>budget 3</option>
            </select>
          </div>
          <div className="input-group input-group--textarea">
            <textarea
              name="message"
              cols={5}
              rows={5}
              placeholder="Message"
              value={state.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn--active btn--send btn--message"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default index;
