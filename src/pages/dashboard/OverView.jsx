import React from "react";
import styled from "styled-components";

const StyledOverViews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
`;

const StyledOverView = styled.div`
  padding: var(--spacing-xl);
  //   background-color: var(--dark-200);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--dark-600);
`;

const OverView = () => {
  return (
    <StyledOverViews>
      <StyledOverView>
        <h3>Value</h3>
        <h4>title</h4>
      </StyledOverView>
      <StyledOverView>
        <h3>Value</h3>
        <h4>title</h4>
      </StyledOverView>
      <StyledOverView>
        <h3>Value</h3>
        <h4>title</h4>
      </StyledOverView>
    </StyledOverViews>
  );
};

export default OverView;
