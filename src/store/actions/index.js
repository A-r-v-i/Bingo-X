import unSplash from "../../api/unsplash";

export const fetchImages = () => {
  return async (dispatch, getState) => {
    await unSplash.get("/search/photos?query=hacker").then((response) => {
      //console.log(response.data);
      dispatch({
        type: "FETCH_IMAGES",
        payload: response.data,
      });
    });
  };
};


export const searchImages = (tag) => {
  return async (dispatch, getState) => {
    await unSplash.get(`/search/photos?query=${tag}`).then(response => {
      dispatch({
        type: "SEARCH_IMAGES",
        payload: response.data
      })
    })
  }
}