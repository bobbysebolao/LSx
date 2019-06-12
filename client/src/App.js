import React from "react";
import "./App.css";
import { Clouds, Landing, Modal, OpenModal, Stories, Form } from "./Components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

const urls = {
  home: "/",
  stories: "/success-stories",
  deepdive: "/dive-deeper",
  experiments: "/experiments",
  action: "/action-plan",
  share: "/share"
};

function App() {
  const [background, setBackground] = React.useState("city");
  return (
    <BrowserRouter>
      <GlobalStyle data={background} />
      <div className='App'>
        <Switch>
          <Route
            exact
            path={urls.home}
            render={props => (
              <React.Fragment>
                <Clouds />
                <Form />
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
                        London Sustainability Exchange is a “think and do”
                        charity
                        <br />
                        which creates collaborations that address the complex
                        barriers to
                        <br />a sustainable London.
                      </p>
                      <br />
                    </Modal>
                  )}
                />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path={urls.stories}
            render={props => {
              setBackground("comic");
              return <Stories />;
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
