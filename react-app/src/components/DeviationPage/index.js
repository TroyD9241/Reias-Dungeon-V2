import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deletePost, editPost } from "../../store/posts";

import "./DeviationPage.css";

import { getSinglePost } from "../../store/posts";
import { likePost } from "../../store/session";

const DeviationPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { postId } = useParams();
  const user = useSelector((state) => state.posts.post?.user_id);
  // console.log("user=", user);

  const post = useSelector((state) => state.posts.post);
  const [like, setLiked] = useState(false);
  const [change, setChange] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [bodyContent, setBodyContent] = useState("");

  useEffect(() => {
    dispatch(getSinglePost(Number(postId)));
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deletePost(postId));
    history.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editPost(postId, title, bodyContent));
  };

  if (!post) {
    return null;
  }
  //! undefined on first render, then returns the correct value
  //   const { body_content, photos, number_comments, number_likes, title } = posts;
  return (
    <div className="page">
      <div className="deviation-container">
        <div
          className="deviation-tile"
          style={{ backgroundImage: `url(${post?.photos.media_url})` }}
        ></div>
      </div>

      <div className="fav-comments">
        <div className="favorites-container">
          <p className="add-to-favs">
            Add to Favourites
            <i className="far fa-star"></i>
          </p>
        </div>
        <div className="comments-container">
          <p className="comment">
            Comment
            <i class="far fa-comment-alt"></i>
          </p>
        </div>
        {/* <p>{post[postId]?.num_likes}</p> */}
      </div>

      <div className="artist-title">
        <h1>{post?.title}</h1>
        <img className="pfp" src={user.profile_picture}></img>
        <p className="penname">By {user.pen_name}</p>
      </div>
      <div className="post-info">
        <p className="deviation-info">{post?.body_content}</p>
      </div>

      <div className="collective-container">
        <div collective-likes>
          <p>{post.number_likes}</p>
          <i className="far fa-star"></i>
        </div>
        <div className="collective-comments">
          <p>{post.number_comments}</p>
          <i class="far fa-comment-alt"></i>
        </div>
      </div>

      <div className="post-info">
        <p className="deviation-info">{post?.body_content}</p>
      </div>

      <button className="submit-form-button" onClick={handleDelete}>
        Delete Post
      </button>
      <button className="submit-form-button" onClick={() => setShowForm(true)}>
        Edit
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="submit-input">
            <label className="submit-form-label">Title</label>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="submit-form-text"
            ></input>
          </div>
          <div className="submit-form-input">
            <label className="submit-form-label">Description</label>
            <input
              type="text"
              name="description"
              onChange={(e) => setBodyContent(e.target.value)}
              value={bodyContent}
              className="submit-form-text"
            ></input>
          </div>
          <button className="submit-form-button" type="submit">
            Edit Post
          </button>
          <button className="submit-form-button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default DeviationPage;
