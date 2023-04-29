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
`;

export const StyledInputGroup = styled.div`
  width: 100%;
  margin-bottom: var(--spacing-lg);
  input {
    width: 100%;
    padding: var(--spacing-lg);
    border: 1px solid var(--dark-800);
    border-radius: var(--radius-lg);
    margin-block: var(--spacing-sm);
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
