import { combineReducers } from 'redux';
import dashboardReducer from './dashboard';
import userProfileReducer from './userProfile';

export default combineReducers({
   dashboard: dashboardReducer,
   userProfile: userProfileReducer,
});
