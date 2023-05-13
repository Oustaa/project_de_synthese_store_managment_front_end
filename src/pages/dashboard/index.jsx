import React, { useEffect } from "react";
import { useState } from "react";

import OverView from "./OverView";
import Header from "./Header";

const Store = () => {
  const [store, setStore] = useState({});

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <OverView />
    </>
  );
};

export default Store;
