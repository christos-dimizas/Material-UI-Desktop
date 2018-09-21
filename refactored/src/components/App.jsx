import React from "react";
import MRouter from "./MRouter.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MRouter history={this.props.history}/>
    );
  }
}