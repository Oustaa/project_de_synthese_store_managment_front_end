import React, { useEffect } from "react";
import { useState } from "react";

import OverView from "./OverView";

const Store = () => {
  const [store, setStore] = useState({});

  useEffect(() => {}, []);

  return (
    <>
      <OverView />
    </>
  );
};

export default Store;
