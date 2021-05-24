const GET_POST = "posts/GET_POST";

const getPost = (post) => ({
  type: GET_POST,
  payload: post,
});

// get all posts
export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");

  const postData = await response.json();
  if (postData.errors) {
    return;
  }
  dispatch(getPost(postData.posts));
};

export const getSinglePost = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}`);

  const postData = await response.json();

  if (postData.errors) {
    return;
  }
  dispatch(getPost(postData));
};

const initialState = {};
const postReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_POST:
      newState = Object.assign({}, state, action.payload);
      return newState;
    default:
      return state;
  }
};

export default postReducer;
