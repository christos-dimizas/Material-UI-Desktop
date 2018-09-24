import { FETCH_DASHBOARD, INCREASE_AVAILABLE_DISK_SPACE } from "../actions/types";
import { fetchDashboard } from "../actions";

export default function(state = fetchDashboard || {}, action) {
   switch (action.type) {
      case FETCH_DASHBOARD:
         return [...state, action.payload];
      case INCREASE_AVAILABLE_DISK_SPACE:
         return [...state, action.payload];
      default:
         return state;
   }
}
