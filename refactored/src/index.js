import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import { createStore} from 'redux';
import App from 'components/App.jsx';
import reducers from './store/reducers';
import "assets/css/material-dashboard-react.css?v=1.4.1";

const history = createBrowserHistory();

const store = createStore(reducers, {});

const index = () => {
  if (document.getElementById("root")) {
    ReactDOM.render(
      <Provider store={store}>
        <App history={history} />
      </Provider>,
      document.querySelector("#root")
    );
  }
};

index();
