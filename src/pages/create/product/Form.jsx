import React, { useEffect } from "react";
import styled from "styled-components";

import { StyledInputGroup } from "../../../styles";
import About from "./About";

const StyledImagesInput = styled.div`
  width: 100%;
  height: 300px;
  background-color: var(--white);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--dark-400);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: var(--spacing-xl);

  input {
    position: absolute;
    inset: 0 0 0 0;
    opacity: 0;
  }
`;

const Form = ({ productInfo, setProductInfo, setImages }) => {
  const imagesChangeHandler = (e) => {
    if (e.target.files[0] === undefined) return;
    setImages((prev) => {
      return [...prev, e.target.files[0]];
    });
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    setProductInfo((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <StyledImagesInput>
        <input
          type="file"
          onChange={imagesChangeHandler}
          // multiple={true}
          accept="image/*"
          name=""
          id=""
        />
        <h4>Add Images</h4>
      </StyledImagesInput>
      <StyledInputGroup>
        <label htmlFor="title">
          <h4>Title:</h4>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={productInfo.title || ""}
          onChange={changeHandler}
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <label htmlFor="description">
          <h4>Description:</h4>
        </label>
        <textarea
          cols="30"
          rows="7"
          name="description"
          id="description"
          value={productInfo.description || ""}
          onChange={changeHandler}
        ></textarea>
      </StyledInputGroup>
      <StyledInputGroup>
        <label htmlFor="price">
          <h4>Price:</h4>
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={productInfo.price || ""}
          onChange={changeHandler}
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <label htmlFor="category_id">
          <h4>Category:</h4>
        </label>
        <select
          name="category_id"
          id="category_id"
          value={productInfo.category_id || ""}
          onChange={changeHandler}
        >
          <option value="dsad">1</option>
          <option value="dsad">2</option>
          <option value="dsad">3</option>
        </select>
      </StyledInputGroup>
      {productInfo.category_id && (
        <StyledInputGroup>
          <label htmlFor="subcategory_id">
            <h4>Sub Category:</h4>
          </label>
          <select
            name="subcategory_id"
            id="subcategory_id"
            value={productInfo.subcategory_id || ""}
            onChange={changeHandler}
          >
            <option value="dsad">1</option>
            <option value="dsad">2</option>
            <option value="dsad">3</option>
          </select>
        </StyledInputGroup>
      )}
      <About />
      <StyledInputGroup>
        <label htmlFor="stock_Quantity">
          <h4>Stock Quantity:</h4>
        </label>
        <input
          type="number"
          name="stock_Quantity"
          id="stock_Quantity"
          value={productInfo.stock_Quantity || ""}
          onChange={changeHandler}
        />
      </StyledInputGroup>
      {/* 
        extra_images: [String],
      */}
    </form>
  );
};

export default Form;
