import styled from "styled-components";

export const StyledContainer = styled.div`
  width: calc(100% - var(--spacing-xxl));
  max-width: 1700px;
  margin: var(--spacing-xxl) auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding-block: var(--spacing-sm);
  gap: var(--spacing-sm);
  & > * {
    min-width: fit-content;
    height: 100%;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-xl);
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var( --primary-dark) "};
  border: none;
  border-radius: var(--radius-lg);
  color: ${({ color }) => (color ? color : "var(--white)")};
  & > * {
    color: ${({ color }) => (color ? color : "var(--white)")};
  }
`;

export const StyledInputGroup = styled.div`
  width: 100%;
  margin-bottom: var(--spacing-lg);
  input,
  textarea {
    width: 100%;
    padding: var(--spacing-lg);
    border: 1px solid var(--dark-800);
    border-radius: var(--radius-lg);
    margin-block: var(--spacing-sm);
  }
  textarea {
    resize: none;
  }
  &.invalid {
    label,
    p {
      color: var(--danger);
    }
    input {
      border-color: var(--danger);
      background-color: var(--danger-100);
    }
  }
`;

export const StyledAlert = styled.div`
  width: calc(100% - var(--spacing-lg));
  max-width: 500px;
  padding: var(--spacing-xl);
  background-color: var(--white);
  border-radius: var(--radius-lg);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const StyledBackDrop = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background-color: ${({ dark }) => (dark ? "#3a3a3a4a" : "")};
  z-index: 300;
`;
