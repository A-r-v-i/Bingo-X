import unSplash from "../../api/unsplash";

const getImages=async(tag="marvel")=>{
  return await unSplash.get(`/search/photos?query=${tag}`)
}

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
    await getImages(tag).then(response => {
      dispatch({
        type: "SEARCH_IMAGES",
        payload: response.data
      })
    })
  }
}

export const fetchBigImage=(tag,id) => {
  return async (dispatch, getState)=> {
    const images = await getImages(tag);
    await images.filter(image => {
      return image.id === id
    })
    .then(image => {
      dispatch ({
        type: "FETCH_BIG_IMAGE",
        payload: image
      })
    })
  }
}