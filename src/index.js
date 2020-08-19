import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product/Product";
import Menu from "./components/Menu/Menu";
import { CartProvider, Cart } from './contexts/Cart';


export default function App() {
  return (
    <CartProvider>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/products" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </CartProvider>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
