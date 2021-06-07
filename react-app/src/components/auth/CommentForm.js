import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/comment";

const CommentForm = () => {
    const dispatch = useDispatch();
    const [bodyContent, setBodyContent] = useState("");

    const updateBodyContent = (e) => {
        setBodyContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createComment(bodyContent));
    };

    //very different form.
    return (
        <form className="submit-page" onSubmit={handleSubmit}>
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
            <button className="submit-form-button" type="submit">
                Submit
        </button>
        </form>
    );
};

export default CommentForm;
