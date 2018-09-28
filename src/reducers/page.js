import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
} from '../actions/PageActions';
import { getCurrentYear } from '../util/date';

const initialState = {
  year: getCurrentYear(),
  photos: [],
  isFetching: false,
  error: '',
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, isFetching: true, year: action.payload };
    case GET_PHOTOS_SUCCESS:
      return { ...state, isFetching: false, photos: action.payload };
    case GET_PHOTOS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
