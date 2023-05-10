import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledInputGroup,
  StyledButton,
  FlexContainer,
} from "../../../../styles";
import {
  BsCaretDown,
  BsCaretUp,
  BsTrash,
  BsPencil,
  BsPlus,
} from "react-icons/bs";

const StyledSection = styled.section`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing-xl);
  }
`;

const StyledAboutForm = styled.div`
  border: 1px dashed var(--dark-600);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
`;

const StyledAbouts = styled.ul`
  padding: 0;
`;

const StyledAbout = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px dashed var(--dark-600);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  & + & {
    margin-top: var(--spacing-lg);
  }
`;

const About = ({ changeHandler }) => {
  const [abouts, setAbouts] = useState([]);
  const [aboutText, setAboutText] = useState("");
  const [extanded, setExtanded] = useState(false);
  const [mode, setMode] = useState("insert");
  const [editId, setEditId] = useState(-1);

  const addAbout = () => {
    if (!aboutText) return;
    if (!abouts.includes(aboutText)) {
      setAbouts((prev) => {
        const abouts = [...prev, aboutText];
        changeHandler({ target: { name: "about", value: abouts } });
        return abouts;
      });
    }
    setAboutText("");
  };

  const deleteAbout = (text) => {
    const filtred = abouts.filter((about) => {
      return about !== text;
    });
    console.log(filtred);
    setAbouts(filtred);
    if (abouts.length === 0) setMode("insert");
    else setMode("");
    setAboutText("");
    setEditId(-1);
    changeHandler({ target: { name: "about", value: filtred } });
  };

  const extandSection = () => {
    setExtanded((prev) => !prev);
  };

  const editBtnClickHandler = (index) => {
    setEditId(index);
    setAboutText(abouts[index]);

    setMode("edit");
  };

  const canselEdit = () => {
    setMode("insert");
    setEditId(-1);
  };

  const canselInsert = () => {
    setMode("");
  };

  const saveHandler = () => {
    const updatedAbouts = abouts.map((about, id) => {
      if (id === editId) return aboutText;
      return about;
    });
    setAbouts(updatedAbouts);
    changeHandler({ target: { name: "about", value: updatedAbouts } });
    setAboutText("");
    setMode("");
    setEditId(-1);
  };

  return (
    <>
      <StyledSection>
        <header>
          <h4>Abouts</h4>
          <StyledButton
            type="button"
            color={"var(--dark-600)"}
            bgColor={"transparent"}
            border={".5px solid var(--dark-600)"}
            onClick={extandSection}
          >
            {!extanded ? <BsCaretDown /> : <BsCaretUp />}
          </StyledButton>
        </header>
        {extanded && (
          <>
            <StyledAbouts>
              {abouts.map((about, i) => {
                return (
                  <StyledAbout key={i}>
                    {i === editId ? (
                      <>
                        <StyledInputGroup>
                          <label htmlFor="about">
                            <h4>About:</h4>
                          </label>
                          <input
                            type="text"
                            id="about"
                            name="about"
                            value={aboutText}
                            onChange={(e) => setAboutText(e.target.value)}
                          />
                          <FlexContainer>
                            <StyledButton type="button" onClick={saveHandler}>
                              Save
                            </StyledButton>
                            <StyledButton
                              color={"var(--dark-600)"}
                              bgColor={"transparent"}
                              border={".5px solid var(--dark-600)"}
                              type="button"
                              onClick={() => deleteAbout(about)}
                            >
                              <BsTrash />
                            </StyledButton>
                          </FlexContainer>
                        </StyledInputGroup>
                      </>
                    ) : (
                      <>
                        <span>{about}</span>
                        <StyledButton
                          color={"var(--dark-600)"}
                          bgColor={"transparent"}
                          border={".5px solid var(--dark-600)"}
                          type="button"
                          onClick={() => editBtnClickHandler(i)}
                        >
                          <BsPencil />
                        </StyledButton>
                      </>
                    )}
                  </StyledAbout>
                );
              })}
            </StyledAbouts>
            {mode === "insert" ? (
              <StyledAboutForm>
                <StyledInputGroup>
                  <label htmlFor="about">
                    <h4>About:</h4>
                  </label>
                  <input
                    type="text"
                    id="about"
                    name="about"
                    value={aboutText}
                    onChange={(e) => setAboutText(e.target.value)}
                  />
                  <FlexContainer>
                    <StyledButton type="button" onClick={addAbout}>
                      Add
                    </StyledButton>
                    <StyledButton
                      color={"var(--dark-600)"}
                      bgColor={"transparent"}
                      border={".5px solid var(--dark-600)"}
                      type="button"
                      onClick={canselInsert}
                    >
                      <BsTrash />
                    </StyledButton>
                  </FlexContainer>
                </StyledInputGroup>
              </StyledAboutForm>
            ) : (
              <StyledButton
                type="button"
                onClick={canselEdit}
                color={"var(--dark-600)"}
                bgColor={"transparent"}
                border={".5px solid var(--dark-600)"}
              >
                <BsPlus /> Add About
              </StyledButton>
            )}
          </>
        )}
      </StyledSection>
    </>
  );
};

export default About;
