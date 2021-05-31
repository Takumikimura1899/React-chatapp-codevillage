import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";
import { NotFound } from "./pages/NotFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Link to="/login">ログインへ</Link>
      <br />
      <Link to="/signup">サインアップへ</Link>
      <br />
      <Switch>
        <Route exact path="/" component={Room} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
