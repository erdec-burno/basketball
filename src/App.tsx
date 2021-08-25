import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import SignIn from "./pages/authorization/signIn";

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path={routes.singIn.path} component={routes.singIn.component} />
            <Route path={routes.home.path} component={routes.home.component} />
          </Switch>
        </div>
      </Router>
  );
}


export const routes={
    home: { path:"/", component: Home},
    singIn: { path:"/signIn", component: SignIn}
}

export default App;
