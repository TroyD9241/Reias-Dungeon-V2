import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { searchPost } from "../../store/search";

import ImageTile from "../ImageTile";
import "./Search.css";

//--------------------------------------

const Search = () => {
  const dispatch = useDispatch();
  const { query } = useParams();

  useEffect(() => {
    (async () => await dispatch(searchPost(query)))();
  }, [dispatch]);

  const searchResults = useSelector((state) => state.search.results);
  if (!searchResults) {
    return null;
  }

  return (
    <div className="page">
      <h1>Results</h1>
      <div className="search">
        {Object.values(searchResults).map((result, i) => {
          return <ImageTile key={i} post={result} />;
        })}
      </div>
    </div>
  );
};

export default Search;
