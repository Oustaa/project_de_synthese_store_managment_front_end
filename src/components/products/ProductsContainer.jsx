import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: var(--spacing-xxl);

  header {
    margin-bottom: var(--spacing-lg);
  }
`;

const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
`;

const products = [
  {
    _id: "6985345-246546452-435346546-45266",
    title:
      "Product number 46 displays a product product displays a product product product product displays a product product",
    price: "34.99$",
  },
];

const ProductsContainer = ({ title }) => {
  return (
    <StyledProducts>
      <header>
        <h2>{title || "Latest Visits"}</h2>
      </header>
      <StyledProductsContainer>
        <ProductCard {...products[0]} />
        <ProductCard {...products[0]} />
        <ProductCard {...products[0]} />
        <ProductCard {...products[0]} />
      </StyledProductsContainer>
    </StyledProducts>
  );
};

export default ProductsContainer;
