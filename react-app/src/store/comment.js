const ADD_COMMENT = 'comments/ADD_COMMENT';

const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
})


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
