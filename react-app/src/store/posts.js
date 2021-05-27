const GET_POST = "posts/GET_POST";
const ADD_POST = "posts/ADD_POST";
const REMOVE_POST = "posts/REMOVE_POST";
const CHANGE_POST = "posts/EDIT_POST";

const getPost = (post) => ({
  type: GET_POST,
  payload: post,
});

const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

const changePost = (post) => ({
  type: CHANGE_POST,
  payload: post,
});

const removePost = (postId) => ({
  type: REMOVE_POST,
  payload: postId,
});
// get all posts
export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts");

  const postData = await response.json();
  console.log("post------", postData);
  if (postData.errors) {
    return;
  }
  dispatch(getPost(postData.posts));
};

export const editPost = (postId, title, bodyContent) => async (dispatch) => {
  const response = await fetch("/api/posts/", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, title, bodyContent }),
  });

  if (response.ok) {
    const postData = await response.json();
    await dispatch(changePost(postData));

    return;
  }
  return { error: "something went wrong" };
};

export const deletePost = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId }),
  });

  if (response.ok) {
    dispatch(removePost(postId));
    return;
  }
  return { error: "something went wrong" };
};

export const getSinglePost = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}`);

  const postData = await response.json();

  if (postData.errors) {
    return;
  }
  dispatch(getPost(postData));
};

export const createPost = (image, title, bodyContent) => async (dispatch) => {
  const response = await fetch("/api/posts/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image, title, bodyContent }),
  });

  if (response.ok) {
    const postData = await response.json();
    dispatch(addPost(postData));
    return;
  }
  return { error: "something went wrong" };
};

const initialState = {
  allPosts: null,
  // post: {
  //   id: 1,
  //   title: "test1",
  //   number_likes: 22,
  //   number_comments: 2,
  //   photos: {
  //     media_url:
  //       "https://thumbs.dreamstime.com/z/tv-test-image-card-rainbow-multi-color-bars-geometric-signals-retro-hardware-s-minimal-pop-art-print-suitable-89603635.jpg",
  //   },
  //   user: {
  //     profile_picture:
  //       "https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc",
  //     pen_name: "not amused",
  //   },
  // },
};

const postReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CHANGE_POST:
      newState = Object.assign({}, state);
      newState.allPosts.post = action.payload;
      return newState;
    case REMOVE_POST:
      newState = Object.assign({}, state);
      delete newState.allPosts[action.payload.id];
      return newState;
    case ADD_POST:
      newState = Object.assign({}, state);
      newState.allPosts[action.payload.id] = action.payload;
      return newState;
    case GET_POST:
      newState = Object.assign({}, state);
      newState.allPosts = action.payload;
      return newState;
    default:
      return state;
  }
};

export default postReducer;
