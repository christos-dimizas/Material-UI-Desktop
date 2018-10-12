import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from '../layouts/Dashboard/DashboardLayout';
// Store Actions
import * as actions from '../store/actions';

class MRouter extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
        <Router history={this.props.history}>
           <Switch>
              <Route
                path={'/'}
                component={DashboardLayout}
              />
           </Switch>
        </Router>
      );
   }
}

export default connect(null, actions)(MRouter);
