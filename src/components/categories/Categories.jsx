import React from "react";
import { StyledCategoriesContainer } from "../../styles/styled-categories";
import Category from "./Category";

const categories = [
  {
    name: "Category one",
    image:
      "https://payonix-stock.onrender.com/api/images/1681212612006-empty-wicker-basket-wicker-basket-made-straw_135176-590.jpg",
  },
  {
    name: "Category two",
    image:
      "https://payonix-stock.onrender.com/api/images/1681212612006-empty-wicker-basket-wicker-basket-made-straw_135176-590.jpg",
  },
  {
    name: "Category three",
    image:
      "https://payonix-stock.onrender.com/api/images/1681212612006-empty-wicker-basket-wicker-basket-made-straw_135176-590.jpg",
  },
  {
    name: "Category four",
    image:
      "https://payonix-stock.onrender.com/api/images/1681212612006-empty-wicker-basket-wicker-basket-made-straw_135176-590.jpg",
  },
  {
    name: "Category five",
    image:
      "https://payonix-stock.onrender.com/api/images/1681212612006-empty-wicker-basket-wicker-basket-made-straw_135176-590.jpg",
  },
  {
    name: "Category six",
    image:
      "https://payonix-stock.onrender.com/api/images/1681212612006-empty-wicker-basket-wicker-basket-made-straw_135176-590.jpg",
  },
];

const Categories = () => {
  return (
    <StyledCategoriesContainer>
      {categories.map((category, id) => (
        <Category {...category} />
      ))}
    </StyledCategoriesContainer>
  );
};

export default Categories;
