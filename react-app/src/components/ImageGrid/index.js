import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageTile from "../ImageTile";
import "./ImageGrid.css";

//--------------------------------------
import { getAllPosts } from "../../store/posts";

const ImageGrid = () => {
  const dispatch = useDispatch();
  //
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts) {
    return null;
  }

  return (
    <>
      <div className="grid-tile">
        {Object.values(posts).map((post, i) => {
          return <ImageTile key={i} post={post} />;
        })}
      </div>
    </>
  );
};

export default ImageGrid;
