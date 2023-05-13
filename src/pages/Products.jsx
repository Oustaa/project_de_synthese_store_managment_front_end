import React, { useEffect } from "react";
import Table from "../components/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/products-slice";
import Loader from "../components/Loader";
import { BsDashLg } from "react-icons/bs";

const tableHeaders = {
  Image: { type: "image", value: "images" },
  Title: {
    value: "title",
    exec: (field) => {
      return field.slice(0, 45) + "...";
    },
  },
  Description: {
    checked: true,
    check: (data) => {
      if (data["description"] !== "") {
        return data.description.slice(0, 45) + "...";
      }
      return <BsDashLg />;
    },
  },
  Price: {
    value: "price",
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
      <Table headers={tableHeaders} data={products} />
    </>
  );
};

export default Products;
