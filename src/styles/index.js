import styled from "styled-components";

export const StyledContainer = styled.div`
  width: calc(100% - var(--spacing-xxl));
  max-width: 1700px;
  margin-inline: auto;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ inline }) => (!inline ? "column" : "row")};

  margin-bottom: ${({ margin }) => (margin ? margin : "var(--spacing-sm)")};

  & + & {
    margin-top: var(--spacing-sm);
  }

  label {
    width: ${({ inline }) => (!inline ? "100%" : "30%")};
    min-width: ${({ inline }) => (!inline ? "100%" : "fit-content")};
    margin-right: ${({ inline }) => (!inline ? "" : "var(--spacing-sm)")};
    color: var(--dark-600);
    text-transform: capitalize;
    font-weight: 500;
  }

  input,
  select {
    background-color: var(--dark-600);
    border: none;
    border-radius: var(--radius-sm);
    padding: var(--spacing-xsm);
    color: var(--white);
    width: ${({ inline }) => (!inline ? "100%" : "70%")};

    &::-webkit-input-placeholder {
      color: var(--primary-dark-100);
    }

    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  }
  select option {
    margin-block: var(--spacing-sm);
    &:hover {
      background-color: red;
    }
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &.invalid {
    label {
      color: red;
    }
    input,
    select {
      outline: 1px solid red;
      background-color: #ff000029;
      color: var(--primary-dark-800);
    }
    p {
      display: inline;
      text-align: left;
      font-size: 0.87rem;
      color: red;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-block: var(--spacing-sm);
  gap: var(--spacing-sm);
`;
