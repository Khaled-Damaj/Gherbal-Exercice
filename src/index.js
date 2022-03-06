import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./i18n";

const loading = (
  <div style={{ textAlign: "center" }}>
    <h3>Loading..</h3>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loading}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,

  document.getElementById("root")
);
