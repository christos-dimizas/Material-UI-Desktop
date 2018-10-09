// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
// core components/views
import DashboardView from '../views/Dashboard/DashboardView.jsx';
import UserProfileViewContainer from '../views/UserProfile/UserProfileViewContainer.jsx';
import TableListView from '../views/TableList/TableListView.jsx';
import TypographyView from '../views/Typography/TypographyView.jsx';
import IconsView from '../views/Icons/IconsView.jsx';
import MapsView from '../views/Maps/MapsView.jsx';
import NotificationsView from '../views/Notifications/NotificationsView.jsx';

const dashboardRoutes = [
   {
      path: '/dashboard',
      sidebarName: 'Dashboard',
      navbarName: 'Material Dashboard',
      icon: Dashboard,
      component: DashboardView,
   },
   {
      path: '/user',
      sidebarName: 'User Profile',
      navbarName: 'Profile',
      icon: Person,
      component: UserProfileViewContainer,
   },
   {
      path: '/table',
      sidebarName: 'Table List',
      navbarName: 'Table List',
      icon: 'content_paste',
      component: TableListView,
   },
   {
      path: '/typography',
      sidebarName: 'Typography',
      navbarName: 'Typography',
      icon: LibraryBooks,
      component: TypographyView,
   },
   {
      path: '/icons',
      sidebarName: 'Icons',
      navbarName: 'Icons',
      icon: BubbleChart,
      component: IconsView,
   },
   {
      path: '/maps',
      sidebarName: 'Maps',
      navbarName: 'Map',
      icon: LocationOn,
      component: MapsView,
   },
   {
      path: '/notifications',
      sidebarName: 'Notifications',
      navbarName: 'Notifications',
      icon: Notifications,
      component: NotificationsView,
   },
   { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' },
];

export default dashboardRoutes;
