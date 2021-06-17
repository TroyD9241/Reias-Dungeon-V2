const ADD_COMMENT = 'comments/ADD_COMMENT';
const GET_COMMENTS = 'comments/GET_COMMENTS';

const getComments = (comments) => ({
    type: GET_COMMENTS,
    payload: comments
})

const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
})

export const getAllComments = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/comments`)

    const comments = await response.json();
    if (comments.errors) {
        return
    }

    dispatch(getComments(comments))

}

export const createComment = (postId, bodyContent) => async (dispatch) => {
    const response = await fetch("/api/comments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, bodyContent }),
    });

    if (response.ok) {
        const commentData = await response.json();
        dispatch(addComment(commentData));
        return;
    }
    return { error: "something went wrong" };
};

const initialState = {
    comments: null
}


const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_COMMENT:
            newState = Object.assign({}, state);
            newState.comment[action.payload.id] = action.payload;
            return newState
        case GET_COMMENTS:
            newState = initialState
            newState.comments = action.payload
            return newState
        default:
            return state
    }
}

export default commentReducer
