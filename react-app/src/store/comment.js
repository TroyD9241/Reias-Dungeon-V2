const ADD_COMMENT = 'comments/ADD_COMMENT';

const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
})


export const createComment = (post_id, body_content) => async (dispatch) => {
    const formData = new FormData();
    formData.append("post_id", post_id)
    formData.append("body_content", body_content)
    const response = await fetch("/api/comments/", {
        method: "POST",
        body: formData,
    })

    if (response.ok) {
        const commentData = await response.json();
        dispatch(addComment(commentData));
    }
    return { error: "omg error" }
};

const initialState = {
    comment: null
}


const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_COMMENT:
            newState = Object.assign({}, state);
            newState.comment[action.payload.id] = action.payload;
            return newState
        default:
            return state
    }
}

export default commentReducer
