import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deletePost, editPost } from "../../store/posts";

import "./DeviationPage.css";

import { getSinglePost } from "../../store/posts";

const DeviationPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { postId } = useParams();
  const post = useSelector((state) => state.posts?.post);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [bodyContent, setBodyContent] = useState("");

  console.log("post=========", post);

  // console.log("post======", post);
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

  //   console.log(photos);

  return (
    <div className="page">
      <div
        className="tile"
        style={{ backgroundImage: `url(${post?.photos.media_url})` }}
      ></div>
      <img src={post?.photos.media_url}></img>
      <div className="fav-comments">
        <p className="add-to-favs">
          Add to Favourites
          <i className="far fa-star"></i>
        </p>
        <p className="comment">
          Comment
          <i class="far fa-comment-alt"></i>
        </p>
      </div>
      <div className="artist-info">
        <h1>{post?.title}</h1>
      </div>
      <div className="deviation-info">Body</div>
      <div className="comment-component">Comment Component</div>
      <button className="delete-button" onClick={handleDelete}>
        Delete Post
      </button>
      <button className="edit-posts" onClick={() => setShowForm(true)}>
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
          <button type="submit">Edit Post</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default DeviationPage;
