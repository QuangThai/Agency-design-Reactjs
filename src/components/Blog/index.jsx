/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
import { useSelector, useDispatch } from "react-redux";
import { actFetchBlogsRequest } from "../../actions";

const index = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.currentBlog);
  useEffect(() => {
    dispatch(actFetchBlogsRequest());
  }, [dispatch]);

  const listBlogPost = blogs.map((item, index) => {
    return <BlogItem key={index} blog={item} />;
  });
  return (
    <section className="blog">
      <div className="header__bg header__bg--blog">
        <img src="./images/bg-blog.png" alt="" />
      </div>
      <div className="grid wide">
        <div className="service__inner">
          <h3 className="heading heading--feature heading--font ">Blog</h3>
          <br />
          <p className="heading-desc">Trendy News Feeds</p>
        </div>
        <div className="row">{listBlogPost}</div>
        <div className="service__btn">
          <a href="#!" className="btn btn--active btn--radius btn--view">
            View all
          </a>
        </div>
      </div>
    </section>
  );
};

export default index;
