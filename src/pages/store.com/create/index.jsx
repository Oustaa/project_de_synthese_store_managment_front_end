import React, { useState } from "react";
import styled from "styled-components";
import StoreName from "./StoreName";
import StoreEmailPhone from "./StoreEmail";
import StoreImages from "./StoreImages";
import StorePassword from "./StorePassword";

import {
  InputGroup,
  StyledContainer,
  StyledButton,
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

// styled
const StyledCreationHeaderFooter = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ end }) => (end ? "flex-end" : "space-between")};
  padding-block: var(--spacing-xl);
  color: var(--dark-800);
  h1,
  h2 {
    font-size: 1.3rem;
  }
`;

const StyledCreateBody = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 100%;
    max-width: 900px;
  }
`;

const Components = [StoreName, StoreEmailPhone, StorePassword, StoreImages];
const titles = ["Name", "Email", "Password", "Images"];

const CreateStore = () => {
  const [storeData, setStoreData] = useState({
    name: "",
    email: "",
    email_verified: false,
    password: "",
    phone_number: "",
    avatar: "",
    bgImg: "",
  });
  const [step, setStep] = useState(0);
  const [canContinue, setCanContinue] = useState(false);

  const RendredComp = Components[step];

  const nextHandler = () => {
    if (!canContinue) return;
    setStep((prev) => (prev += 1));
    setCanContinue(false);
  };
  const prevHandler = () => {
    setStep((prev) => (prev -= 1));
  };

  const changeHandler = (e) => {
    const name = e.target.name;

    setStoreData((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const imageChnageHandler = (e) => {
    const name = e.target.name;

    setStoreData((prev) => {
      return { ...prev, [name]: e.target.files[0] };
    });
  };

  const createStore = async () => {
    const formData = new FormData();

    formData.append("avatar", storeData.avatar);
    formData.append("bg_image", storeData.bgImg);
    formData.append("name", storeData.name);
    formData.append("email", storeData.email);
    formData.append("password", storeData.password);
    formData.append("phone_number", storeData.phone_number);
    formData.append("email_verified", storeData.email_verified);

    const respons = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/stores`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
        params: {
          name: storeData.name,
          email: storeData.email,
          password: storeData.password,
          phone_number: "0641567728",
        },
      }
    );

    const responseData = await respons.json();

    console.log(responseData);
  };

  return (
    <StyledContainer>
      <StyledCreationHeaderFooter>
        <h1>Create Store</h1>
        <h2>{titles[step]}</h2>
      </StyledCreationHeaderFooter>
      <StyledCreateBody>
        {
          <RendredComp
            setCanContinue={setCanContinue}
            changeHandler={changeHandler}
            imageChnageHandler={imageChnageHandler}
            data={storeData}
          />
        }
      </StyledCreateBody>
      <StyledCreationHeaderFooter end={step === 0}>
        {step !== 0 && (
          <StyledButton onClick={prevHandler} bgColor="var(--dark-500)">
            Prev
          </StyledButton>
        )}
        {step === 3 ? (
          <StyledButton onClick={createStore}>Create</StyledButton>
        ) : (
          <StyledButton
            bgColor={!canContinue ? "var(--dark-500)" : "var(--primary-dark)"}
            onClick={nextHandler}
          >
            Next
          </StyledButton>
        )}
      </StyledCreationHeaderFooter>
    </StyledContainer>
  );
};

export default CreateStore;
