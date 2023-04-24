import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StoreCom from "./pages/store/Store";
import CreateStore from "./pages/create";
import CreateProduct from "./pages/CreateProduct";
import StoreLogIn from "./pages/LogIn";

// import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import GlobalStyles from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route index element={<StoreCom />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="create/product" element={<CreateProduct />} />
          </Route>

          <Route path="create" element={<CreateStore />} />
          <Route path="login" element={<StoreLogIn />} />
        </Routes>
        <GlobalStyles />
      </Router>
    </>
  );
};
export default App;
