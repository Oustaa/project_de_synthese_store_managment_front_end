import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProduct = styled.div`
  max-width: 100%;
`;

const StyledProductImage = styled.div`
  width: 100%;
  aspect-ratio: 1/0.6;
  background-color: var(--dark-400);
  border-radius: var(--radius-sm);

  img {
    object-fit: contain;
  }
`;

const StyledProductBody = styled.div`
  h2 {
    font-size: 1.2rem;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // max-width: 400px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ProductCard = ({ _id, title, price, image, reviews }) => {
  return (
    <Link to={`/product/${_id}`}>
      <StyledProduct title={title}>
        <StyledProductImage>
          <img src={image} alt={title} />
        </StyledProductImage>
        <StyledProductBody>
          <h2 title={title}>{title}</h2>
          <div>
            <h3>{price}</h3>
            <h3>New</h3>
          </div>
        </StyledProductBody>
      </StyledProduct>
    </Link>
  );
};

export default ProductCard;
