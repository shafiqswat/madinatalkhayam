/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "typicons.font";
import reportWebVitals from "./reportWebVitals";
import { SearchProvider } from "./Components/context/SearchContext";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);

reportWebVitals();
