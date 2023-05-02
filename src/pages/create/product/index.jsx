import React from "react";

import styled from "styled-components";

import { FlexContainer, StyledInputGroup } from "../../../styles";

const CreateProduct = () => {
  return (
    <FlexContainer>
      <div>
        <form>
          <StyledInputGroup>
            <label htmlFor="title">
              <h4>Product Title:</h4>
            </label>
            <input type="text" id="title" />
          </StyledInputGroup>
        </form>
      </div>
      <div>display</div>
    </FlexContainer>
  );
};

export default CreateProduct;
