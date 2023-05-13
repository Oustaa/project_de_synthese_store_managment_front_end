import React from "react";
import styled from "styled-components";

const StyledOverViews = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-xl);
`;

const StyledOverView = styled.div`
  padding: var(--spacing-xxl);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--dark-600);
  position: relative;
  h3 {
    font-size: 1rem;
    color: var(--dark-300);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 2.4rem;
      color: var(--dark-700);
      margin-left: var(--spacing-xl);
    }
  }
`;

const OverView = () => {
  return (
    <StyledOverViews>
      <StyledOverView>
        <h3>
          Views <span>56</span>
        </h3>
      </StyledOverView>
      <StyledOverView>
        <h3>
          Visits <span>34</span>
        </h3>
      </StyledOverView>
      <StyledOverView>
        <h3>
          View / Visit Ratio <span>0.61</span>
        </h3>
      </StyledOverView>
      <StyledOverView>
        <h3>
          Orders <span>23</span>
        </h3>
      </StyledOverView>
      <StyledOverView>
        <h3>
          Revenu <span>390$</span>
        </h3>
      </StyledOverView>
    </StyledOverViews>
  );
};

export default OverView;
