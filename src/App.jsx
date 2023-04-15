import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Store from "./pages/Store";

import StoreCom from "./pages/store.com/Store";
import CreateStore from "./pages/store.com/CreateStore";
import CreateProduct from "./pages/store.com/CreateProduct";

import Layout from "./components/Layout/Layout";

import GlobalStyles from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/product/:category" element={<Products />} />
            <Route path="/store/:id" element={<Store />} />
          </Route>
          <Route path="/store.com">
            <Route index element={<StoreCom />} />
            <Route path="create" element={<CreateStore />} />
            <Route path="create/product" element={<CreateProduct />} />
          </Route>
        </Routes>
        <GlobalStyles />
      </Router>
    </>
  );
};
export default App;
