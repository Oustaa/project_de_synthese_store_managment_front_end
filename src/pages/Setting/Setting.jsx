import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Images from "./Images";
import { StyledInputGroup, FlexContainer, StyledButton } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { closeAlert, openAlert } from "../../features/ui-slice";
import Alert from "../../components/Alert";
import axios from "axios";

const StyledSettingPage = styled.div`
  h1 {
    margin-bottom: var(--spacing-xl);
  }
`;

const StyledGroup = styled.div`
  margin-block: var(--spacing-lg);
`;

const StyledForm = styled.form`
  padding-bottom: var(--spacing-lg);
  width: calc(100% - var(--spacing-lg));
  max-width: 1200px;
  margin-inline: auto;
`;

const Setting = () => {
  const dispatch = useDispatch();
  const [storeInfo, setStoreInfo] = useState({});
  const store = useSelector((state) => state.store.store);
  const [password, setPassword] = useState({ value: "", correct: true });

  const getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      setStoreInfo((prev) => {
        return {
          ...prev,
          location: { lat: lat.toFixed(2), long: long.toFixed(2) },
        };
      });
    });
  };

  const deleteAccountHandler = () => {
    alert("delete");
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      // sent a request put to stores end point
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/stores`, {
        method: "PUT",
        body: JSON.stringify({ data: storeInfo, password: password.value }),
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 403) {
        if (data.password === false && data.message === "Invalid password") {
          setPassword((prev) => {
            return { ...prev, correct: false };
          });
        }
      }

      if (data?.updatedStore.acknowledged) {
        dispatch(closeAlert());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const enterPasswordHandler = (e) => {
    e.preventDefault();
    dispatch(openAlert());
  };

  const passwordChangeHandler = (e) => {
    setPassword({
      correct: true,
      value: e.target.value,
    });
  };

  const inputChangeHandler = (e) => {
    const name = e.target.name;

    setStoreInfo((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const cancelHandler = () => {
    dispatch(closeAlert());
    setPassword({ value: "", correct: true });
  };

  useEffect(() => {
    setStoreInfo(store);
  }, [store]);

  return (
    <>
      <Alert>
        <form onSubmit={updateHandler}>
          <StyledInputGroup className={`${!password.correct && "invalid"}`}>
            <label htmlFor="passwordConfirmation">
              <h4>Please enter your password</h4>
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              value={password.value}
              onChange={passwordChangeHandler}
            />
            {!password.correct && (
              <p>Password is incorrect, can't update store information.</p>
            )}
          </StyledInputGroup>
          <FlexContainer>
            <StyledButton>Confirm</StyledButton>
            <StyledButton
              type="button"
              onClick={cancelHandler}
              bgColor="var(--danger)"
            >
              Cancel
            </StyledButton>
          </FlexContainer>
        </form>
      </Alert>
      <StyledSettingPage>
        <h1>Setting</h1>
        <StyledGroup>
          <h4>Change Store Logo Or Background Image:</h4>
          <Images />
        </StyledGroup>
        <StyledForm onSubmit={enterPasswordHandler}>
          <StyledInputGroup>
            <label htmlFor="storename">
              <h4>Store Name:</h4>
            </label>
            <input
              id="storename"
              name="name"
              type="text"
              value={storeInfo?.name}
              onChange={inputChangeHandler}
            />
          </StyledInputGroup>
          <StyledInputGroup>
            <label htmlFor="bio">
              <h4>Change Bio:</h4>
            </label>
            <textarea
              name="bio"
              id="bio"
              rows="3"
              value={storeInfo?.bio}
              onChange={inputChangeHandler}
            ></textarea>
          </StyledInputGroup>
          <StyledInputGroup>
            <label htmlFor="address">
              <h4>Address:</h4>
            </label>
            <input
              name="address"
              id="address"
              type="text"
              value={storeInfo?.address}
              onChange={inputChangeHandler}
            />
          </StyledInputGroup>
          <FlexContainer>
            <StyledInputGroup>
              <label htmlFor="lat">
                <h4>Lat:</h4>
              </label>
              <input
                type="text"
                name="location.lat"
                id="lat"
                value={storeInfo.location?.lat}
                readOnly={true}
              />
            </StyledInputGroup>
            <StyledInputGroup>
              <label htmlFor="long">
                <h4>Long:</h4>
              </label>
              <input
                type="text"
                name="location.long"
                id="long"
                value={storeInfo.location?.long}
                readOnly={true}
              />
            </StyledInputGroup>
            <StyledButton
              type="button"
              onClick={getLocationHandler}
              bgColor="var(--warning-100)"
              color="var(--dark-800)"
            >
              Get current location
            </StyledButton>
          </FlexContainer>

          <StyledInputGroup>
            <label htmlFor="email">
              <h4>Email:</h4>
            </label>
            <input
              name="email"
              id="email"
              type="email"
              value={storeInfo?.email}
              onChange={inputChangeHandler}
            />
          </StyledInputGroup>
          <StyledInputGroup>
            <label htmlFor="phone">
              <h4>Phone number:</h4>
            </label>
            <input
              name="phone"
              id="phone"
              type="phone"
              value={storeInfo?.phone_number}
              onChange={inputChangeHandler}
            />
          </StyledInputGroup>
          {/* <StyledInputGroup>
            <label htmlFor="password">
              <h4>Password:</h4>
            </label>
            <input
              name="password"
              id="password"
              type="password"
              value={storeInfo?.password}
              onChange={inputChangeHandler}
            />
          </StyledInputGroup> */}
          <FlexContainer>
            <StyledButton>Save Chnages</StyledButton>
            <StyledButton
              onClick={deleteAccountHandler}
              type="button"
              bgColor="var(--danger)"
            >
              Delete Account
            </StyledButton>
          </FlexContainer>
        </StyledForm>
      </StyledSettingPage>
    </>
  );
};

export default Setting;
