import React from "react";
import "./App.css";
import { Clouds, Landing, Modal, OpenModal, Stories } from "./Components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

const urls = {
  home: "/",
  stories: "/success-stories",
  deepdive: "/dive-deeper",
  experiments: "/experiments",
  action: "/action-plan"
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
                      <h2>About LSx</h2>
                      This is where the modal text is.
                      <br />
                      <button onClick={hide}>X</button>
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
