import React from "react";
import { StyledContainer } from "../styles/index";
import Categories from "../components/categories/Categories";
import ProductsContainer from "../components/products/ProductsContainer";

const Home = () => {
  return (
    <div>
      <StyledContainer>
        <Categories />
        <ProductsContainer title="recently visited" />
        <ProductsContainer title="suggested for you" />
        <ProductsContainer title="Latest uploaded items" />
      </StyledContainer>
    </div>
  );
};

export default Home;
