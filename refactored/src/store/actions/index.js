import { FETCH_DASHBOARD, INCREASE_AVAILABLE_DISK_SPACE } from "./types";
import mockStore from "../mockStore";

// On Redux a react component calls for an action. This action is created from an Action Creator process
// which produces the relative action.
// Redux-thunk allows us to manually dispatch an action rather than waiting to be dispatched from the Action Creator.

export const fetchDashboard = () => ({
   type: "FETCH_DASHBOARD",
   payload: mockStore.dashboard
});

export const increaseAvailableDiskSpace = (newSpace) => {
   // const mockStoreClone = JSON.parse(JSON.stringify(mockStore))
   mockStore.dashboard.used_space.spaceAvailable = (mockStore.dashboard.used_space.spaceAvailable * 1 + 1 * newSpace) + '';
   return {
      type: "INCREASE_AVAILABLE_DISK_SPACE",
      payload: {...mockStore.dashboard}
   };
};