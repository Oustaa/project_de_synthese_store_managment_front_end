import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth-slice";
import { useNavigate, Link } from "react-router-dom";
import {
  StyledInputGroup,
  StyledContainer,
  StyledButton,
} from "../styles/index";
import { ClipLoader } from "react-spinners";

const StyledLogInPage = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledForm = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  a {
    text-decoration: underline;
    color: inherit;
    margin-top: var(--spacing-lg);
  }
`;

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { token, name } = useSelector((state) => state.auth);
  if (!token && !name) {
    token = localStorage.getItem("token");
    name = localStorage.getItem("storename");
  }
  const [storeInfo, setStoreInfo] = useState({
    password: "",
    password_valid: true,
    email: "",
    email_valid: true,
  });
  const [loading, setLoading] = useState(false);

  const changehandler = (e) => {
    const name = e.target.name;

    setStoreInfo((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  useEffect(() => {}, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const respons = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        storeInfo
      );

      const data = await respons.data;
      if (data.accessToken && data.name) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("storename", data.name);
        dispatch(login({ token: data.accessToken, name: data.name }));
        return navigate("/");
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        if (!error?.response?.data?.email)
          setStoreInfo((prev) => {
            return { ...prev, email_valid: false };
          });
        else if (!error?.response?.data?.password)
          setStoreInfo((prev) => {
            return { ...prev, password_valid: false };
          });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(login({ name, token }));
    if (name && token) navigate("/");
  }, [name, token, navigate, dispatch]);

  return (
    <StyledContainer>
      <StyledLogInPage>
        <StyledForm onSubmit={submitHandler}>
          <StyledInputGroup className={storeInfo.email_valid || "invalid"}>
            <label htmlFor="email">
              <h3>Store Email:</h3>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={storeInfo.email}
              onChange={changehandler}
            />
          </StyledInputGroup>
          <StyledInputGroup className={storeInfo.password_valid || "invalid"}>
            <label htmlFor="password">
              <h3>Password:</h3>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={storeInfo.password}
              onChange={changehandler}
            />
          </StyledInputGroup>
          <StyledButton>
            {!loading ? (
              "Log In"
            ) : (
              <ClipLoader color="var(--white)" size={20} />
            )}
          </StyledButton>
          <Link to="/create">Ou create a store</Link>
        </StyledForm>
      </StyledLogInPage>
    </StyledContainer>
  );
};

export default LogIn;
