import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CardSlider } from "./Components/CardSlider";
// import Pin from "./Components/CardsToView/Pin";
import Modal from "./Components/Modal/Modal";
import SmokeText from "./Components/SmokeText/SmokeText";
// import Pin from "./components/CardsToView/Pin";
import ViewCon1 from "./Components/ViewCon/ViewCon1";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SmokeText} />
          <Route path="/add" component={Modal} />
          <Route path="/home" component={CardSlider} />
          <Route path="/view" component={ViewCon1} />
          <Route exact path="/view/:id">
            <ViewCon1 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
