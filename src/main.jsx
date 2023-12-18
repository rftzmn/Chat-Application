import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ProdContextProvider } from "./context/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ProdContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ProdContextProvider>
  </AuthContextProvider>
);
