import {
   FETCH_DASHBOARD,
   INCREASE_AVAILABLE_DISK_SPACE,
   INCREASE_REVENUE,
} from '../actions/types';
import { fetchDashboardAction } from '../actions';

export default function (state = fetchDashboardAction || {}, action) {
   switch (action.type) {
      case FETCH_DASHBOARD:
         return { ...state, ...action.payload };
      case INCREASE_AVAILABLE_DISK_SPACE:
         return { ...state, ...action.payload };
      case INCREASE_REVENUE:
         return { ...state, ...action.payload };
      default:
         return state;
   }
}
