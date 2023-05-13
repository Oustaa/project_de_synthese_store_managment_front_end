import React from "react";
import styled from "styled-components";
const StyledHader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: var(--spacing-lg);
  select {
    border: none;
    font-size: 1.1rem;
  }
`;
const Header = () => {
  return (
    <StyledHader>
      <h1>Dashboard</h1>
      <form>
        <select name="" id="">
          <option value="">Last 7 Days</option>
          <option value="">Last Month</option>
          <option value="">Last 3 Months</option>
          <option value="">Last 6 Months</option>
          <option value="">Last Year</option>
        </select>
      </form>
    </StyledHader>
  );
};

export default Header;
