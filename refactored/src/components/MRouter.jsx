import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "../routes";

export default class MRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={this.props.history}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}