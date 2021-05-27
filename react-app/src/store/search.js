const GET_SEARCH = "search/GET_SEARCH";

const getSearch = (posts) => ({
  type: GET_SEARCH,
  payload: posts,
});

export const searchPost = (query) => async (dispatch) => {
  const response = await fetch(`/api/search/${query}`);

  if (response.ok) {
    const results = await response.json();

    dispatch(getSearch(results));

    return;
  }

  return { error: "there was an error" };
};

const initialState = { results: null };

const searchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SEARCH:
      newState = Object.assign({}, state);
      newState.results = action.payload;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
