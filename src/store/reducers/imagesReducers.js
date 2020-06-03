const initState = {
  images: []
};

export default (state=initState, action) => {
  switch(action.type) {
    case "FETCH_IMAGES":
      return action.payload

    default:
      return state;  
  }
}