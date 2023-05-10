import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Images from "./Images";
import Info from "./Info";

const StyledDisplayProduct = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  width: 70%;
  position: sticky;
  top: 0;
  height: calc(100% - 80px);
  padding-right: 5px;
`;

const DisplayProduct = ({ productInfo, images, setImages }) => {
  const storeInfo = useSelector((state) => state.store.store);

  return (
    <StyledDisplayProduct>
      <Images images={images} setImages={setImages} />
      <Info storeInfo={storeInfo} productInfo={productInfo} />
    </StyledDisplayProduct>
  );
};

export default DisplayProduct;