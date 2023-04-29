import React from "react";
import { v4 } from "uuid";
import Table from "../components/table/Table";

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
  const data = [];

  for (let index = 0; index < 70; index++) {
    data.push({ id: v4() });
  }

  return (
    <>
      <Table tableTitle="" headers={tableHeaders} data={data} />
    </>
  );
};

export default Products;
