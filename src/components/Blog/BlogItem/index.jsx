import React from "react";

const index = (props) => {
  const { blog } = props;
  return (
    <div className="col l-4">
      <div className="blog__single">
        <img src={blog.image} alt="" />
        <div className="blog__content">
          <h2 className="blog__date">{blog.date}</h2>
          <div className="blog__desc">{blog.description}</div>
          <div className="service__line service__line--blog">
            <span className="service__line-one service__line-one--spacing" />
            <span className="service__line-one" />
          </div>
          <div className="blog__news">{blog.title}</div>
          <a href="#!" className="blog__link">
            Know <i className="far fa-long-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
