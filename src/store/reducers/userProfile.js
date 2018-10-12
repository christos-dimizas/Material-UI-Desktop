import {
   FETCH_USER_PROFILE,
   UPDATE_USER_PROFILE,
} from '../actions/types';
import { fetchDUserProfileAction } from '../actions';

export default function (state = fetchDUserProfileAction || {}, action) {
   switch (action.type) {
      case FETCH_USER_PROFILE:
         return { ...state, ...action.payload };
      case UPDATE_USER_PROFILE:
         return { ...state, ...action.payload };
      default:
         return state;
   }
}
