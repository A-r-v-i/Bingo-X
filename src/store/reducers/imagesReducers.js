const initState = {
  images: [],
  image:''
};

export default (state = initState, action) => {
  switch (action.type) {
    case "FETCH_IMAGES":
      state = action.payload;
      //console.log(state);
      return state;

    case "SEARCH_IMAGES":
      state = action.payload;
      return state;

    case "FETCH_BIG_IMAGE":
      state = action.payload;
      return state;

    default:
      return state;
  }
};
