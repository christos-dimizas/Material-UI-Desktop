import { FETCH_DASHBOARD, INCREASE_AVAILABLE_DISK_SPACE, INCREASE_REVENUE } from './types';
import defaultStore from '../defaultStore';

// On Redux a react component calls for an action. This action is created from an Action Creator process
// which produces the relative action.
// Redux-thunk allows us to manually dispatch an action rather than waiting to be dispatched from the Action Creator.

const initialDashboardStore = { ...defaultStore.dashboard };

export const fetchDashboard = () => ({
   type: FETCH_DASHBOARD,
   payload: { ...initialDashboardStore },
});

export const increaseAvailableDiskSpace = (newSpace) => {
   // const mockStoreClone = JSON.parse(JSON.stringify(defaultStore))
   initialDashboardStore.used_space.spaceAvailable = (initialDashboardStore.used_space.spaceAvailable * 1 + 1 * newSpace) + '';
   return {
      type: INCREASE_AVAILABLE_DISK_SPACE,
      payload: { ...initialDashboardStore },
   };
};

export const increaseRevenue = (revenueIncrease) => {
   // const mockStoreClone = JSON.parse(JSON.stringify(defaultStore))
   initialDashboardStore.revenue.value = (initialDashboardStore.revenue.value * 1 + 1 * revenueIncrease) + '';
   return {
      type: INCREASE_REVENUE,
      payload: { ...initialDashboardStore },
   };
};
