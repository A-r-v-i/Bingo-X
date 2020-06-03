import {combineReducers} from 'redux';
import imagesReducer from './imagesReducers';

export default combineReducers({
  images: imagesReducer
});