import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BlockProvider } from "./context/BlockContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BlockProvider>
    <App />
  </BlockProvider>
);