import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Store from "./pages/store/Store";
import CreateStore from "./pages/create";
import CreateProduct from "./pages/CreateProduct";
import LogIn from "./pages/LogIn";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Header from "./components/Layout/Header";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import GlobalStyles from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<ProtectedRoute />}>
              <Route index element={<Store />} />
              <Route path="products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="create/product" element={<CreateProduct />} />
            </Route>
          </Route>
          <Route path="create" element={<CreateStore />} />
          <Route path="login" element={<LogIn />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </>
  );
};
export default App;
