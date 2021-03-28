import React from "react";
import ReactDOM from "react-dom";
import { worker } from "./mocks/browser";
import * as Sentry from "@sentry/browser";
import App from "./App";

if (process.env.NODE_ENV === "development") {
  worker.start();
} else {
  // Sentry.init({ dsn: "TODO: Legg inn din  egen sentry url" });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("podlet-dittnav-lenkeliste")
);
