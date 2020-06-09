import unSplash from "../../api/unsplash";

const getImages = async (tag = "marvel") => {
  return await unSplash.get(`/search/photos?query=${tag}`);
};

export const fetchImages = () => {
  return async (dispatch, getState) => {
    await getImages().then((response) => {
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
    await getImages(tag).then((response) => {
      dispatch({
        type: "SEARCH_IMAGES",
        payload: response.data,
      });
    });
  };
};

export const fetchBigImage = (id) => {
  return async (dispatch, getState) => {
    const images = await getImages();
    const data = images.data.results;
    console.log(data);
    const image = await data.find((img) => {
      return img.id === id;
    });
    console.log(id,image);
    dispatch({
      type: "FETCH_BIG_IMAGE",
      payload: image,
    });
  };
};
