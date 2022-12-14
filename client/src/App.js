/** @format */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./routes";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
