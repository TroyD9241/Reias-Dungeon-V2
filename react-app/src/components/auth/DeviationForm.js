import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPost } from "../../store/posts";

const DeviationForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [bodyContent, setBodyContent] = useState("");

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateBodyContent = (e) => {
    setBodyContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPost(image, title, bodyContent));
    history.push("/");
  };

  //very different form.
  return (
    <form className="submit-page" onSubmit={handleSubmit}>
      <div className="submit-input">
        <label className="submit-form-label">Title</label>
        <input
          type="text"
          name="title"
          onChange={updateTitle}
          value={title}
          className="submit-form-text"
        ></input>
      </div>
      <div className="submit-form-input">
        <label className="submit-form-label">Description</label>
        <input
          type="text"
          name="description"
          onChange={updateBodyContent}
          value={bodyContent}
          className="submit-form-text"
        ></input>
      </div>
      <div className="submit-form-input">
        <label className="submit-form-label">Photo Url</label>
        <input
          type="text"
          name="photo"
          onChange={updateImage}
          value={image}
          className="submit-form-text"
        ></input>
      </div>
      <button className="submit-form-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default DeviationForm;
