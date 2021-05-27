import React from "react";
import { useHistory } from "react-router-dom";

import "./ImageTile.css";

const ImageTile = ({ post }) => {
  const history = useHistory();
  console.log("post====", post);
  // const { post: data, user } = post;
  // console.log("data=====", data);
  // console.log("user====", user);
  const { id, title, number_likes, number_comments, photos, user } = post;
  console.log("user-photos----", user, photos);

  if (!post) {
    return null;
  }

  const handleClick = () => {
    history.push(`/posts/${id}`);
  };
  return (
    <div
      className="tile"
      onClick={handleClick}
      style={{ backgroundImage: `url(${photos.media_url})` }}
    >
      <div className="hover-effect">
        <button className="ellipsis">
          <i className="far fa-ellipsis-h"></i>
        </button>
        <div className="lower">
          <div className="top-row">
            <p className="title">{title}</p>
            <p className="numberof-comments">
              {number_comments} <i className="far fa-comment"></i>
            </p>
          </div>
          <div className="bottom-row">
            <div className="userinfo">
              <img src={user?.profile_picture} alt="sorry :(" />
              <p className="penname">{user?.pen_name}</p>
            </div>
            <p className="numberof-likes">
              {number_likes} <i className="far fa-star"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTile;
