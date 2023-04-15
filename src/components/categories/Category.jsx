import React from "react";
import { StyledCategory } from "../../styles/styled-categories";

const Category = ({ name, image }) => {
  return (
    <StyledCategory href="/Cart">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
    </StyledCategory>
  );
};

export default Category;
