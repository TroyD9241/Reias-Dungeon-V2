import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPost } from "../../store/posts";

const DeviationForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [bodyContent, setBodyContent] = useState("");


  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  async function uploadImage() {
    const formData = new FormData();
    formData.append("image", image);
    const res = await fetch('/api/users/image/', {
      method: "PATCH",
      body: formData,
    });
    // if (!res.ok) {
    //   const data = await res.json();
    //   setBackendErrors(data.errors);
    // }
  }


  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateBodyContent = (e) => {
    setBodyContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPost(image, title, bodyContent));
    uploadImage()
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
        <div>
          <label>{`Photo Url `}</label>
          <input
            type="file"
            accept="image/*"
            onChange={updateImage}
          ></input>
        </div>
      </div>
      <button className="submit-form-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default DeviationForm;
