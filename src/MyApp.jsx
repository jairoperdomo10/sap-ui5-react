import React from "react";
import { ShellBar, ShellBarItem, Avatar } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/icons/add.js";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useHistory } from "react-router-dom";

export function MyApp() {
  const history = useHistory();
  const handleLogoClick = () => {
    history.push("/");
  };

  return (
    <div>
      <ShellBar
        logo={
          <img
            alt="seidor"
            src="data:image/png;base64,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"
          />
        }
        profile={
          <Avatar image="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" />
        }
        primaryTitle="My App"
        onLogoClick={handleLogoClick}
      >
        <ShellBarItem src="sap-icon://add" text="Add" />
      </ShellBar>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail" component={Detail} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}