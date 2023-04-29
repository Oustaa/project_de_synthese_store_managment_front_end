import styled from "styled-components";

export const StyledTableConainers = styled.div`
  width: ${({ width }) => (width ? `${width}` : "100%")};
  overflow-x: auto;
  max-height: calc(100vh);
  height: fit-content;

  position: relative;
  padding-right: var(--spacing-lg);

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--dark-200);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--dark-500);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--dark-600);
  }

  & + & {
    margin-left: var(--spacing-lg);
  }
`;

export const StyledTableHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between !important;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: var(--white);
  padding: var(--spacing-sm);
  & > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-sm);
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  min-width: max-content;
  overflow-x: scroll;
  width: ${({ width }) => (width ? `${width} !important` : "100%")};
  min-width: max-content;
  box-shadow: var(--boxShadow);
  position: relative;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const StyledTableHeader = styled.thead`
  background-color: var(--white);
  position: sticky;
  top: 0;
`;

export const StyledTr = styled.tr`
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledTh = styled.th`
  color: var(--dark-800);
  padding: var(--spacing-lg) var(--spacing-sm);
  font-size: 0.9rem;
  font-weight: 300;
  border: 1px solid var(--dark-100);
`;

export const StyledTd = styled.td`
  color: var(--dark-700);
  padding-block: var(--spacing-lg);
  padding-inline: var(--spacing-sm);
  font-weight: 500;
  text-align: center;
  border: 1px solid var(--dark-100);

  &.image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTableBody = styled.tbody`
  background-color: var(--white);
`;
