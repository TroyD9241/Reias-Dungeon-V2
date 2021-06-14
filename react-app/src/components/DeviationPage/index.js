import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deletePost, editPost } from "../../store/posts";

import "./DeviationPage.css";
import Comments from "../CommentCard";

import { getSinglePost, addLike } from "../../store/posts";
import { getAllComments } from "../../store/comment";

const DeviationPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { postId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const comments = useSelector((state) => state.comment.comments?.comment)
  const user = useSelector((state) => state.posts.post?.user_id);

  const post = useSelector((state) => state.posts.post);
  // const [change, setChange] = useState("");
  const [isFavourited, setIsFavourited] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [bodyContent, setBodyContent] = useState("");

  useEffect(() => {
    dispatch(getSinglePost(Number(postId)));
    dispatch(getAllComments(postId))
  }, [dispatch, postId]);

  const handleDelete = async () => {
    await dispatch(deletePost(postId));
    history.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editPost(postId, title, bodyContent));
  };

  const toggleLike = () => {
    dispatch(addLike(!isLiked, postId));
    setIsLiked(!isLiked);
  };

  const toggleFavourite = () => {
    setIsFavourited(!isFavourited);
  };

  if (!post) {
    return null;
  }
  //! undefined on first render, then returns the correct value
  return (
    <div className="page">
      <div className="deviation-container">
        <div
          className="deviation-tile"
          style={{ backgroundImage: `url(${post?.photos.media_url})` }}
        ></div>
      </div>

      <div className="post-container">
        <div className="fav-comments">
          <div className="favorites-container">
            <i
              className={`${isFavourited ? "fas" : "far"}  fa-star`}
              onClick={toggleFavourite}
            ></i>
            <p className="add-to-favs">Add to Favourites</p>
          </div>
          <div className="comments-container">
            <i class="far fa-comment-alt"></i>
            <p className="comment">Comment</p>
          </div>
        </div>

        <div className="artist-title">
          <img className="pfp" src={user.profile_picture} alt="oof"></img>
          <div>
            <h3>{post?.title}</h3>
            <p className="penname">By {user.pen_name}</p>
          </div>
        </div>
        <div className="collective-container">
          <div className="collective-likes">
            <p>{post.number_likes}</p>
            <i className={`${isLiked ? "fas" : "far"}  fa-star`} onClick={toggleLike}></i>
          </div>

          <div className="collective-comments">
            <p>{post.number_comments}</p>
            <i class="far fa-comment-alt"></i>
          </div>
        </div>
        <div className="post-info">
          <p className="deviation-info">{post?.body_content}</p>
        </div>
        {sessionUser && (
          <>
            <button className="submit-form-button delete-button" onClick={handleDelete}>
              Delete Post
            </button>
            <button className="submit-form-button" onClick={() => setShowForm(true)}>
              Edit
            </button>
          </>
        )}
        {showForm && (
          <form className="crud-form" onSubmit={handleSubmit}>
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
            <button className="edit-form-button" type="submit">
              Edit Post
            </button>
            <button className="edit-form-button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        )}
      </div>
      {sessionUser &&
        <Comments comments={comments} />
      }
    </div>
  );
};

export default DeviationPage;
