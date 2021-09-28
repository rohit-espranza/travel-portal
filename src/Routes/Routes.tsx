import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Path from "./routePaths";
import Home from "./../pages/Home/Home";
interface Props {
  services: number[];
}

const Routes = ({ services }: Props) => {
  const paths = Path.filter((p, index) => {
    if (services?.includes(index)) {
      return [...p];
    }
  });
  return (
    <React.Fragment>
      <Switch>
        {paths.flat().map((path) => (
          <Route exact path={path.route}>
            {path.component}
          </Route>
        ))}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
