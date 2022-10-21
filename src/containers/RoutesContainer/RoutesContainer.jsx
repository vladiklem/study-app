import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CharacterPage } from "../../pages/CharacterPage/CharacterPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { Header } from "../Header/Header";

const RoutesContainer = () => {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/character/:id"
              render={(props) => {
                console.log(props);
                return <CharacterPage {...props} />;
              }}
            />
          </Switch>
        </main>
        <footer>Footer</footer>
      </>
    </Router>
  );
};

export default RoutesContainer;
