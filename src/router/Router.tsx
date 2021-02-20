import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageAuth from "../pages/PageAuth";
import PageAccount from "../pages/PageAccount";
import PageCreateEdit from "../pages/PageCreateEdit";
import PageVideos from "../pages/PageVideos";
import PageHome from "../pages/PageHome";
import React, {FC} from "react";
import PrivateRoute from "./PrivateRoute";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <PageAuth />
        </Route>
        <Route path="/account">
          <PageAccount/>
        </Route>
        <Route path="/create">
          <PageCreateEdit/>
        </Route>
        <Route path="/videos">
          <PageVideos/>
        </Route>
        <Route path="/">
          <PageHome/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router