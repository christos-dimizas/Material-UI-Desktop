import React from 'react';
import { connect } from 'react-redux';
import MRouter from './MRouter.jsx';
// Store Actions
import * as actions from '../store/actions';

class App extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
        <MRouter history={this.props.history} />
      );
   }
}

export default connect(null, actions)(App);
