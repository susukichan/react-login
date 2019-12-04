import React from "react";
// import SimpleTabs from "./components/SimpleTabs";
import LoginTabs from "./components/LoginTabs";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <SimpleTabs /> */}
          <LoginTabs />
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
