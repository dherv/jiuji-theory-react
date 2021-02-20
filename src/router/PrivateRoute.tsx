import React, {FC} from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute: FC = ({ children, ...rest }) => {
  let auth = localStorage.get("token")
  return (
    <Route
      {...rest}
      render={({ location }: any) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute