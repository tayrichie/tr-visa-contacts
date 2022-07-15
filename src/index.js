import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./styles/normalize.css";
import "./index.css";
import { ThemeProvider } from "styled-components";
import App from "./App";
import Home from "./routes/Home";
import AddNew from "./routes/AddNew";
import EditContact from "./routes/EditContact";

const theme = {
  colors: {
    primary: "#2E5EAA",
    secondary: "#E73D23",
    accent: "#B82A14",
    white: "#fff",
    offwhite: "#EDEDED",
    black: "#000",
    shadow: "rgba(0,0,0,.3)",
  },
  fontSizes: {
    text: "1em",
    tiny: "0.875em",
    small: "1.1em",
    sm_md: "1.2em",
    medium: "1.6em",
    large: "2.5em",
  },
  border: {
    color: "rgba(46,94,170,.2)",
    radius: "10px",
    width: "2px",
  },
  padding: {
    quarter: ".25em",
    half: ".5em",
    full: "1em",
  },
  margin: {
    quarter: ".25em",
    half: ".5em",
    full: "1em",
  },
  icons: {
    regular: "1.25em",
    large: "1.5em",
  },
};

function Index() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<App/>}>
              <Route index element={<Home/>} />
              <Route path="add-new" element={<AddNew/>} />
              <Route path="edit-:id" element={<EditContact/>} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Index />);
