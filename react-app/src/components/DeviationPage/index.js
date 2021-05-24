import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getSinglePost } from "../../store/posts";

const DeviationPage = () => {
  const dispatch = useDispatch();
  let { postId } = useParams();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch]);

  const { body_content, photos, number_comments, number_likes, title } = posts;

  console.log(photos);

  return (
    <div className="deviation-container">
      <h1>Test Deviation Page</h1>
      <h1>Test Deviation Page</h1>
      <h1>Test Deviation Page</h1>

      <div
        className="photo"
        style={{ backgroundImage: `url(${photos?.media_url})` }}
      ></div>
    </div>
  );
};

export default DeviationPage;
