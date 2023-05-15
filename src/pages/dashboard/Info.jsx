import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledInfoContainer = styled.div`
  padding-block: var(--spacing-xxl);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
`;

const StyledInfo = styled.div`
  border-radius: var(--radius-lg);
  overflow: hidden;
`;

const StyledInfoHeader = styled.div`
  background-color: var(--primary);
  padding: var(--spacing-lg);

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);

  a {
    color: var(--white);
  }
`;
const StyledInfoBody = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px dashed var(--dark-300);
  border-left: 1px dashed var(--dark-300);
  border-right: 1px dashed var(--dark-300);
`;

const Info = () => {
  return (
    <StyledInfoContainer>
      <StyledInfo>
        <StyledInfoHeader>
          <h2>Products</h2>
          <Link to={"/orders"}>Read more...</Link>
        </StyledInfoHeader>
        <StyledInfoBody>no order yet....</StyledInfoBody>
      </StyledInfo>
      <StyledInfo>
        <StyledInfoHeader>
          <h2>Orders</h2>
          <Link to={"/orders"}>Read more...</Link>
        </StyledInfoHeader>
        <StyledInfoBody>no order yet....</StyledInfoBody>
      </StyledInfo>
      <StyledInfo>
        <StyledInfoHeader>
          <h2>Questions</h2>
          <Link to={"/questions"}>Read more...</Link>
        </StyledInfoHeader>
        <StyledInfoBody>no questions yet....</StyledInfoBody>
      </StyledInfo>
    </StyledInfoContainer>
  );
};

export default Info;
