import styled from "styled-components";

export const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: var(--spacing-xxl);

  header {
    margin-bottom: var(--spacing-lg);
  }
`;

export const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledProduct = styled.div`
  max-width: 100%;
`;

export const StyledProductImage = styled.div`
  width: 100%;
  aspect-ratio: 1/0.6;
  background-color: var(--dark-400);
  border-radius: var(--radius-sm);

  img {
    object-fit: contain;
  }
`;

export const StyledProductBody = styled.div`
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