import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Store from "./pages/store/Store";
import CreateStore from "./pages/create/account";
import CreateProduct from "./pages/create/product";
import LogIn from "./pages/LogIn";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Setting from "./pages/Setting/Setting";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import SinglProductPage from "./pages/SinglProductPage";

import GlobalStyles from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<ProtectedRoute />}>
              <Route index element={<Store />} />
              <Route path="dashboard" element={<Store />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<SinglProductPage />} />
              <Route path="orders" element={<Orders />} />
              <Route path="/setting" element={<Setting />} />
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
