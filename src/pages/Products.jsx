import React, { useEffect } from "react";
import Table from "../components/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/products-slice";
import Loader from "../components/Loader";

const tableHeaders = {
  // Id: { value: "_id" },
  Image: { type: "image", value: "images" },
  Title: {
    value: "title",
    exec: (field) => {
      return field.slice(0, 45) + "...";
    },
  },
  Description: {
    value: "description",
    exec: (field) => {
      return field.slice(0, 45) + "...";
    },
  },
  "Added At": { type: "date", value: "inserted_at" },
  Views: { value: "views" },
  Visits: { value: "visits" },
  "V / V Ratio": {
    checked: true,
    check: (data) => {
      const vvRasio = data.views / data.visits;
      if (vvRasio) return vvRasio;
      return 0;
    },
  },
  Reviews: {
    checked: true,
    check: (data) => {
      return data.reviews.length;
    },
  },
};

const Products = () => {
  const dispatch = useDispatch();
  const { value: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Table tableTitle="" headers={tableHeaders} data={products} />
    </>
  );
};

export default Products;
