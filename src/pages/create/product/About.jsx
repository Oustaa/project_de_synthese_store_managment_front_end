import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledInputGroup,
  StyledButton,
  FlexContainer,
  StyledInputButton,
} from "../../../styles";

const StyledAboutSection = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const StyledAbout = styled.li`
  span {
    margin-left: var(--spacing-lg);
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

const About = ({ ChangeHandler }) => {
  const [abouts, setAbouts] = useState([]);
  const [aboutText, setAboutText] = useState("");

  const addAbout = () => {
    if (!aboutText) return;
    if (!abouts.includes(aboutText)) {
      setAbouts((prev) => [aboutText, ...prev]);
    }
    setAboutText("");
  };

  const deleteAbout = (text) => {
    const filtred = abouts.filter((about) => about !== text);
    setAbouts(filtred);
  };

  return (
    <StyledAboutSection>
      <StyledInputGroup>
        <label htmlFor="about">
          <h4>About:</h4>
        </label>
        <StyledInputButton>
          <input
            type="text"
            id="about"
            name="about"
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
          />
          <StyledButton type="button" onClick={addAbout}>
            Add
          </StyledButton>
        </StyledInputButton>
      </StyledInputGroup>

      <ul>
        {abouts.map((about, i) => (
          <StyledAbout key={i}>
            <button onClick={() => deleteAbout(about)} type="button">
              x
            </button>
            <span>{about}</span>
          </StyledAbout>
        ))}
      </ul>
    </StyledAboutSection>
  );
};

export default About;
