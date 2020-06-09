import unSplash from "../../api/unsplash";

const getImages = async () => {
  return await unSplash.get("/photos");
};

const searchPhotos = async (tag) => {
  return await unSplash.get(`/search/photos?query=${tag}`);
};

export const fetchImages = () => {
  return async (dispatch, getState) => {
    await getImages().then((response) => {
      console.log(response);
      dispatch({
        type: "FETCH_IMAGES",
        payload: response.data,
      });
    });
  };
};

export const searchImages = (tag) => {
  return async (dispatch, getState) => {
    await searchPhotos(tag).then((response) => {
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
    console.log(id, image);
    dispatch({
      type: "FETCH_BIG_IMAGE",
      payload: image,
    });
  };
};
