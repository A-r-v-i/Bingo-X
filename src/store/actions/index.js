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
