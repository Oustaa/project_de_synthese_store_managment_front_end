import React, { useState } from "react";
import styled from "styled-components";
import {
  InputGroup,
  StyledContainer,
  FlexContainer,
} from "../../../styles/index";
import { StyledLinks, StyledNav } from "../../../styles/styled-header";
import { Link } from "react-router-dom";
import axios from "axios";

const StyledLogInPage = styled.div`
  padding-block: var(--spacing-xxl);
  display: flex;
  gap: var(--spacing-xl);
  align-items: flex-start;
  justify-content: center;
  // height: calc(100vh - 80px);
`;

const StyledForm = styled.form`
  width: 40%;
`;

const StyledStorePreviewContainer = styled.div`
  width: 60%;
`;

const StyledStorePreview = styled.div`
  width: 100%;
  height: 100%;

  .bg-image {
    background-color: var(--dark-100);
    width: 100%;
    aspect-ratio: 1/0.3;

    img {
      width: 100%;
      aspect-ratio: 1/0.3;
      object-fit: cover;
    }
  }
`;

const StyledPreviewHeader = styled.header`
  background-color: var(--dark-700);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  padding-left: var(--spacing-xxl);
  h3 {
    font-weight: 300;
  }
`;

const StyledAvatar = styled.div`
  width: 50px;
  aspect-ratio: 1 / 1;
  background-color: var(--white);
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: fill;
  }
`;

const CreateStore = () => {
  const [storeInfo, setStoreInfo] = useState({
    name: "",
    email: "",
    password: "",
    password_cf: "",
    phone_number: "",
    avatar: "",
    bgImg: "",
  });
  const [avatar, setAvatar] = useState("");
  const [bgImg, setBgImg] = useState("");

  const changeHandler = (e) => {
    const name = e.target.name;

    setStoreInfo((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const avatarChnageHnadler = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
    setStoreInfo((prev) => {
      return { ...prev, avatar: e.target.files[0] };
    });
  };

  const bgImageChnageHnadler = (e) => {
    setBgImg(URL.createObjectURL(e.target.files[0]));
    setStoreInfo((prev) => {
      return { ...prev, bgImg: e.target.files[0] };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("avatar", storeInfo.avatar);
    // formData.append("file", storeInfo.bgImg);
    formData.append("name", storeInfo.name);
    formData.append("email", storeInfo.email);
    formData.append("password", storeInfo.password);
    formData.append("phone_number", storeInfo.phone_number);

    const respons = await fetch(`${process.env.REACT_APP_BASE_URL}/stores`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: {
        name: storeInfo.name,
        email: storeInfo.email,
        password: storeInfo.password,
        phone_number: storeInfo.phone_number,
      },
    });

    const responseData = await respons.json();

    console.log(responseData);
  };

  return (
    <StyledContainer>
      <StyledLogInPage>
        <StyledForm onSubmit={submitHandler}>
          <h1>Create Your store</h1>
          <InputGroup inline={true}>
            <label htmlFor="name">Store Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={storeInfo.name}
              onChange={changeHandler}
            />
          </InputGroup>
          <InputGroup inline={true}>
            <label htmlFor="email">Store Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={storeInfo.email}
              onChange={changeHandler}
            />
          </InputGroup>
          <InputGroup inline={true}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={storeInfo.password}
              onChange={changeHandler}
            />
          </InputGroup>
          <InputGroup inline={true}>
            <label htmlFor="password_cf">Confirm Password</label>
            <input
              type="password"
              name="password_cf"
              id="password_cf"
              value={storeInfo.password_cf}
              onChange={changeHandler}
            />
          </InputGroup>
          <InputGroup inline={true}>
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="phone"
              name="phone_number"
              id="phone_number"
              value={storeInfo.phone_number}
              onChange={changeHandler}
            />
          </InputGroup>
          <InputGroup inline={true}>
            <label htmlFor="avatar">Store logo:</label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              onChange={avatarChnageHnadler}
            />
          </InputGroup>
          <InputGroup inline={true}>
            <label htmlFor="bg_image">Background Image:</label>
            <input
              type="file"
              name="bg_image"
              id="bg_image"
              onChange={bgImageChnageHnadler}
            />
          </InputGroup>
          <button type="submit">Create</button>
        </StyledForm>
        <StyledStorePreviewContainer>
          <h1>Your Store Preview:</h1>
          <StyledStorePreview>
            <div className="bg-image">
              <img src={bgImg} alt="" />
            </div>
            <StyledPreviewHeader>
              <FlexContainer>
                <StyledAvatar>
                  <img src={avatar} alt="" />
                </StyledAvatar>
                <h3>{storeInfo.name || "Your store name"}</h3>
              </FlexContainer>
              <StyledNav>
                <StyledLinks>
                  <Link to="/">Home</Link>
                  <Link to="/">DashBoard</Link>
                  <Link to="/">Orders</Link>
                </StyledLinks>
              </StyledNav>
            </StyledPreviewHeader>
          </StyledStorePreview>
        </StyledStorePreviewContainer>
      </StyledLogInPage>
    </StyledContainer>
  );
};

export default CreateStore;
