import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import App from 'components/App.jsx';
import "assets/css/material-dashboard-react.css?v=1.4.1";

const history = createBrowserHistory();

ReactDOM.render(<App history={history} />, document.getElementById("root"));
