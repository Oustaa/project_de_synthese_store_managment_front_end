import React from "react";
import styled from "styled-components";

import { StyledButton, StyledInputGroup } from "../../../../styles";
import About from "./About";
import Categories from "./Categories";
import AddSpecification from "./AddSpecification";
import axios from "axios";
import { useSelector } from "react-redux";
import ExtandedSection from "../../../../components/ExtandedSection";
const StyledFrom = styled.form`
  width: 30%;
`;

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

const StyledLineBreak = styled.hr`
  margin-block: var(--spacing-xl);
`;

const Form = ({ productInfo, setProductInfo, setImages, images }) => {
  const storeInfo = useSelector((state) => state.store.store);

  const imagesChangeHandler = (e) => {
    setImages((prev) => {
      return [...prev, ...e.target.files];
    });
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    setProductInfo((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let i = 0; i < images.length; i++) {
      data.append("images[]", images[i]);
    }
    console.log(data.get("images"));
    data.append("currency", storeInfo.currency);

    for (let field in productInfo) {
      data.append(field, JSON.stringify(productInfo[field]));
    }

    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/products`,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
          enctype: "multipart/form-data",
        },
      }
    );

    const responseData = await response.data;
    console.log(responseData);
  };

  return (
    <StyledFrom onSubmit={submitHandler}>
      <StyledImagesInput>
        <input
          type="file"
          onChange={imagesChangeHandler}
          multiple={true}
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
      <Categories changeHandler={changeHandler} />
      <StyledInputGroup>
        <label htmlFor="stock_Quantity">
          <h4>Stock Quantity:</h4>
        </label>
        <input
          type="number"
          name="stock_Quantity"
          id="stock_Quantity"
          min={0}
          value={productInfo.stock_Quantity || ""}
          onChange={changeHandler}
        />
      </StyledInputGroup>
      <StyledLineBreak />
      <ExtandedSection title="Abouts">
        <About data={productInfo} changeHandler={changeHandler} />
      </ExtandedSection>
      <StyledLineBreak />
      <ExtandedSection title="Specifications">
        <AddSpecification changeHandler={changeHandler} data={productInfo} />
      </ExtandedSection>
      <StyledLineBreak />
      <StyledButton>Create Product</StyledButton>
    </StyledFrom>
  );
};

export default Form;
