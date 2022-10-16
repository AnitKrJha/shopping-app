import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/user.context";
import { CartProvider } from "./context/cart.context";
import { ProductsProvider } from "./context/products.context";
import "./index.scss";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
