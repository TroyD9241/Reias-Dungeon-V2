import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment, getAllComments } from "../../store/comment";

const CommentForm = () => {
    const dispatch = useDispatch();
    const [bodyContent, setBodyContent] = useState("");
    const post = useSelector((state) => state.posts.post);
    const postId = post.id

    useEffect(() => {
        dispatch(getAllComments(postId))
    }, [dispatch, postId])


    const updateBodyContent = (e) => {
        setBodyContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createComment(postId, bodyContent));
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
