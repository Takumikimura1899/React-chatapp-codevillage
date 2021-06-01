import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";
import { NotFound } from "./pages/NotFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "./AuthService";
import LoggedInRoute from "./LoggedInRoute";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Link to="/">ルームへ</Link>
        <br />
        <Link to="/login">ログインへ</Link>
        <br />
        <Link to="/signup">サインアップへ</Link>
        <br />
        <Switch>
          <LoggedInRoute exact path="/" component={Room} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};
