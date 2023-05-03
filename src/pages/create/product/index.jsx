import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Form from "./Form";
import DisplayProduct from "./DisplayProduct";

const StyledCreateProduct = styled.div`
  display: flex;
  gap: var(--spacing-lg);

  & > * {
    width: 50%;
  }
`;

const CreateProduct = () => {
  const [productInfo, setProductInfo] = useState({});
  const [images, setImages] = useState([]);

  return (
    <StyledCreateProduct>
      <Form
        productInfo={productInfo}
        setProductInfo={setProductInfo}
        setImages={setImages}
      />
      <DisplayProduct images={images} productInfo={productInfo} />
    </StyledCreateProduct>
  );
};

export default CreateProduct;
