import React from "react";
import MRouter from "./MRouter.jsx";
import {connect} from 'react-redux';
// Store Actions
import * as actions from "../store/actions";

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