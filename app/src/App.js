import { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/Theme";
import MainContainer from "./components/MainContainer";
import MessageContainer from "./components/MessageContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  const [inputName, setInputName] = useState("");
  const [validate, setValidate] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <MainContainer
                inputName={inputName}
                setInputName={setInputName}
                validate={validate}
                setValidate={setValidate}
                socket={socket}
              />
            )}
          ></Route>
          <Route
            exact
            path="/message"
            component={() => (
              <MessageContainer
                socket={socket}
                inputName={inputName}
                io={io}
                username={inputName}
              />
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
