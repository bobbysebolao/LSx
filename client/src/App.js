import React from "react";
import "./App.css";
import { Clouds, Landing, Modal, OpenModal, Stories } from "./Components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

const urls = {
  home: "/",
  stories: "/success-stories"
};

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Switch>
          <Route
            exact
            path={urls.home}
            render={props => (
              <React.Fragment>
                <Clouds />
                <Landing />
                <OpenModal
                  toggle={show => (
                    <button onClick={show}>Learn about LSx</button>
                  )}
                  content={hide => (
            <Modal>
              <button onClick={hide}>X</button>
              <h2>
                About <a href='http://www.lsx.org.uk/'>LSx</a>
              </h2>
              <p>
                London Sustainability Exchange is a “think and do” charity
                <br />
                which creates collaborations that address the complex barriers
                to
                <br />a sustainable London.
              </p>
              <br />
            </Modal>
                  )}
                />
              </React.Fragment>
            )}
          />
          <Route exact path={urls.stories} render={props => <Stories />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
