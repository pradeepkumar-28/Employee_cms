import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { EuiProvider } from "@elastic/eui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EuiProvider colorMode="light">
    <App />
  </EuiProvider>
);
