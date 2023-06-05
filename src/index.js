import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";
import UserContextProvider from "./context/UserContext";
import { createRoot } from "react-dom/client";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
