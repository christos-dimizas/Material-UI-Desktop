
// -----------------------------------------------------------------------------
// User Profile actions
// -----------------------------------------------------------------------------
import { FETCH_USER_PROFILE, UPDATE_USER_PROFILE } from './types';
import defaultStore from '../defaultStore';

const userProfileData = { ...defaultStore.userProfile };

export const fetchDUserProfileAction = () => ({
   type: FETCH_USER_PROFILE,
   payload: { ...userProfileData },
});

export const userProfileUpdateAction = (profileData) => {
   if (profileData) {
      Object.keys(profileData).forEach(key => {
         userProfileData[key] = profileData[key];
      });
   }
   return {
      type: UPDATE_USER_PROFILE,
      payload: { ...userProfileData },
   };
};
