import React, { useEffect } from "react";
import Table from "../components/table/Table";
import { useSelector } from "react-redux";

const tableHeaders = {
  Id: { value: "id" },
  Image: {},
  Title: {},
  Description: {},
  "Added At": {},
  Views: {},
  Visits: {},
  "V / V Ratio": {},
};

const Products = () => {
  const products = useSelector((state) => state.store.products);

  useEffect(() => {}, []);

  return (
    <>
      <Table tableTitle="" headers={tableHeaders} data={products} />
    </>
  );
};

export default Products;
