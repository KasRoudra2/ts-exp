import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Header2 from "./components/header2/Header";
import theme, { darkTheme } from "./Theme";
import { stateArray } from "./interface";
import { Provider } from "./contexts/Context";
import "./App.css";

function App() {
  const [ dark, isDark ] = useState(false);
  const value: stateArray = { dark, isDark };
  return (
    <div className="App">
      <style>
        {`
          body {
            color: ${dark ? darkTheme.color : theme.color};
            background-color: ${
              dark ? darkTheme.backgroundColor : theme.backgroundColor
            };
          }
        `}
      </style>
      <Provider value={value}>
        <Router>
          <Routes>
            <Route path="/header1" element={<Header theme={dark? darkTheme : theme} />} />
            <Route path="/header2" element={<Header2 theme={dark? darkTheme : theme} />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
