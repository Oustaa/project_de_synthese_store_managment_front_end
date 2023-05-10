import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Form from "./Form";
import ProductOverView from "./OverView";

const StyledCreateProduct = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  position: relative;
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
        images={images}
      />
      <ProductOverView
        images={images}
        setImages={setImages}
        productInfo={productInfo}
      />
    </StyledCreateProduct>
  );
};

export default CreateProduct;
