const initState = {
  images: []
};

export default (state=initState, action) => {
  switch(action.type) {
    case "FETCH_IMAGES":
      //console.log(action.payload.results)
      state = action.payload;
      return state;

    case "SEARCH_IMAGES":
      state = action.payload;
      return state;

    default:
      return state;  
  }

}