import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";
import { getAllPosts } from "../../store/posts";

const Carousel = () => {
  const dispatch = useDispatch();

  let images = [];
  const posts = useSelector((state) => state.posts?.allPosts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts) {
    return "loading";
  }
  //   const handleClick = () => {
  //     history.push(`/posts/${id}`);
  //   };

  // const handleDrag = (e) => e.preventDefault();

  const postArr = Object.values(posts);

  for (const post of postArr) {
    images.push(
      <div className="tiles">
        <div>{post.photos.media_url}</div>
        <div
          className="tile"
          //   onClick={handleClick}
          style={{ backgroundImage: `url(${post.photos.media_url})` }}
        >
          <div className="hover-effect">
            <button className="ellipsis">
              <i className="far fa-ellipsis-h"></i>
            </button>
            <div className="lower">
              <div className="top-row">
                <p className="title">{post.title}</p>
                <p className="numberof-comments">
                  {post.number_comments} <i className="far fa-comment"></i>
                </p>
              </div>
              <div className="bottom-row">
                <div className="userinfo">
                  <img src={post.user_id?.profile_picture} alt="sorry :(" />
                  <p className="penname">{post.user_id?.pen_name}</p>
                </div>
                <p className="numberof-likes">
                  {post.number_likes} <i className="far fa-star"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <AliceCarousel mouseTracking images={images} />;
};

export default Carousel;
