import React from "react";
import { useHistory } from "react-router-dom";

import "./ImageTile.css";

const ImageTile = ({ post }) => {
  const history = useHistory();

  const { id, title, number_likes, number_comments, media_url, user_id } = post;

  if (!post) {
    return null;
  }

  const handleClick = () => {
    history.push(`/posts/${id}`);
  };
  return (
    <div className="tiles">
      <div
        className="tile"
        onClick={handleClick}
        style={{ backgroundImage: `url(${media_url})` }}
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
                <img src={user_id?.profile_picture} alt="sorry :(" />
                <p className="penname">{user_id?.pen_name}</p>
              </div>
              <p className="numberof-likes">
                {number_likes} <i className="far fa-star"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTile;
