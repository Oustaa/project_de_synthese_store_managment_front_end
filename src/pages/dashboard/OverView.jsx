import React from "react";
import styled from "styled-components";

const StyledOverViews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
`;

const StyledOverView = styled.div`
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--dark-600);
  position: relative;
  h3 {
    font-size: 2.4rem;
    color: var(--dark-700);
    text-align: center;
  }
  h4 {
    font-size: 1rem;
    color: var(--dark-300);
  }
`;

const OverView = () => {
  return (
    <StyledOverViews>
      <StyledOverView>
        <h4>Views</h4>
        <h3>56</h3>
      </StyledOverView>
      <StyledOverView>
        <h4>Visits</h4>
        <h3>34</h3>
      </StyledOverView>
      <StyledOverView>
        <h4>Visits / Views Rasio</h4>
        <h3>0.61</h3>
      </StyledOverView>
    </StyledOverViews>
  );
};

export default OverView;
