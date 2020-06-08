const initState = {
  images: [],
  image:''
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

    case "FETCH_BIG_IMAGE":
      state.image = action.payload;
      return state.image;
      
    default:
      return state;  
  }

}