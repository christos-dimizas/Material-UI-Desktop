
// -----------------------------------------------------------------------------
// Dashboard actions
// -----------------------------------------------------------------------------
import { FETCH_DASHBOARD, INCREASE_AVAILABLE_DISK_SPACE, INCREASE_REVENUE } from './types';
import defaultStore from '../defaultStore';

const dashboardData = { ...defaultStore.dashboard };

export const fetchDashboardAction = () => ({
   type: FETCH_DASHBOARD,
   payload: { ...dashboardData },
});

export const increaseAvailableDiskSpaceAction = (newSpace) => {
   dashboardData.used_space.spaceAvailable = (dashboardData.used_space.spaceAvailable * 1 + 1 * newSpace) + '';
   return {
      type: INCREASE_AVAILABLE_DISK_SPACE,
      payload: { ...dashboardData },
   };
};

export const increaseRevenueAction = (revenueIncrease) => {
   dashboardData.revenue.value = (dashboardData.revenue.value * 1 + 1 * revenueIncrease) + '';
   return {
      type: INCREASE_REVENUE,
      payload: { ...dashboardData },
   };
};
