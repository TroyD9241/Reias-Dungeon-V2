import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageTile from "../ImageTile";
import "./ImageGrid.css";

//--------------------------------------
import { getAllPosts } from "../../store/posts";

const ImageGrid = () => {
  const dispatch = useDispatch();
  //
  const posts = useSelector((state) => state.posts.allPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts) {
    return null;
  }
  return (
    <>
      <div className='outer-grid'>
        <div className="grid">
          {Object.values(posts)?.map((post, i) => {
            return <ImageTile key={i} post={post} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
