const SET_POST = posts/SET_POST


const setPost = (post) => ({
    type: SET_POST,
    payload: post
})

// get all posts
export const getAllPosts = () => async(dispatch) => {
    const response = await fetch('/api/posts')

    const postData = await response.json();

    if (postData.errors) {
        return;
    }
    dispatch(setPost(postData))
}


const initialState = {}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_POST:
            return action.payload ;
        default:
            return state;
    }
}
