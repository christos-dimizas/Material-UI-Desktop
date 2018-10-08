import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
// creates a beautiful scrollbar
import 'perfect-scrollbar/css/perfect-scrollbar.css';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

import dashboardRoutes from '../../routes/dashboard.jsx';

import dashboardStyle from '../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx';

import image from '../../assets/img/sidebar-2.jpg';
import logo from '../../assets/img/reactlogo.png';

// Store Actions
import * as actions from '../../store/actions';

const switchRoutes = (
  <Switch>
     {dashboardRoutes.map((prop, key) => {
        if (prop.redirect) {
           return <Redirect from={prop.path} to={prop.to} key={key} />;
        }
        return <Route path={prop.path} component={prop.component} key={key} />;
     })}
  </Switch>
);

class DashboardLayout extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         mobileOpen: false,
      };
      this.resizeFunction = this.resizeFunction.bind(this);
   }

   componentWillUnmount() {
      window.removeEventListener('resize', this.resizeFunction);
   }

   handleDrawerToggle = () => {
      this.setState({ mobileOpen: !this.state.mobileOpen });
   };

   getMapRoute() {
      return this.props.location.pathname !== '/maps';
   }

   resizeFunction() {
      if (window.innerWidth >= 960) {
         this.setState({ mobileOpen: false });
      }
   }

   render() {
      const { classes, ...rest } = this.props;
      return (
        <div className={classes.wrapper}>
           <Sidebar
             routes={dashboardRoutes}
             logoText={'REFACTORED Dev'}
             logo={logo}
             image={image}
             handleDrawerToggle={this.handleDrawerToggle}
             open={this.state.mobileOpen}
             color="blue"
             {...rest}
           />
           <div className={classes.mainPanel}>
              <Header
                routes={dashboardRoutes}
                handleDrawerToggle={this.handleDrawerToggle}
                {...rest}
              />
              {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
              {this.getMapRoute() ? (
                <div className={classes.content}>
                   <div className={classes.container}>{switchRoutes}</div>
                </div>
              ) : (
                <div className={classes.map}>{switchRoutes}</div>
              )}
              {this.getMapRoute() ? <Footer /> : null}
           </div>
        </div>
      );
   }
}

DashboardLayout.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default connect(null, actions)(withStyles(dashboardStyle)(DashboardLayout));

