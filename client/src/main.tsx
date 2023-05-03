import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
