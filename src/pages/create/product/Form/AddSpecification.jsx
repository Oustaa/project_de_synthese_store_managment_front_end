import React, { useEffect, useState } from "react";
import { StyledButton, StyledInputGroup } from "../../../../styles";
import { useSelector } from "react-redux";
import Select from "react-select";
import styled from "styled-components";

const Styles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "var(--dark-500)",
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "var(--white)",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "var(--white)",
    ":hover": {
      backgroundColor: "var(--dark-800)",
      color: "white",
    },
  }),
};

const StyledExtraSpecifications = styled.div`
  padding: var(--spacing-sm);
  border: 1px dashed var(--dark-300);
  h3 {
    margin-bottom: var(--spacing-lg);
  }
`;

async function getSpecifications(data, cb, gategories_ids = []) {
  console.log(gategories_ids);
  const results = [];

  await data.forEach((category) => {
    category?.subCategories?.forEach((subCat) => {
      if (subCat.specifications) {
        subCat.specifications.forEach((spec) => {
          if (gategories_ids.includes(subCat.name)) results.unshift(spec);
          else results.push(spec);
        });
      }
    });
  });
  const optionsString = new Array(...new Set(results));

  const options = optionsString.map((option) => {
    return { value: option, label: option };
  });

  cb(options);
}

const AddSpecification = ({ data, changeHandler }) => {
  const [options, setOptions] = useState([]);
  const categories = useSelector((state) => state.store.categories);
  const [specName, setSpecName] = useState("");
  const [specValue, setSpecValue] = useState("");

  useEffect(() => {
    getSpecifications(categories, setOptions, data.subcategories_id);
  }, [categories, data.subcategories_id]);

  const addClickHandler = (e) => {
    if (!specName || !specValue) return;
    if (data.specifications)
      changeHandler({
        target: {
          name: "specifications",
          value: [
            ...data.specifications,
            { name: specName.value, value: specValue },
          ],
        },
      });
    else
      changeHandler({
        target: {
          name: "specifications",
          value: [{ name: specName.value, value: specValue }],
        },
      });

    setSpecName("");
    setSpecValue("");
  };

  return (
    <>
      <StyledExtraSpecifications>
        <h3>Add specifications</h3>
        <StyledInputGroup>
          <label htmlFor="name">
            <h4>name:</h4>
          </label>
          <Select
            closeMenuOnSelect={true}
            onChange={(e) => setSpecName(e)}
            value={specName}
            options={options}
            styles={Styles}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <label htmlFor="value">
            <h4>Value:</h4>
          </label>
          <input
            type="text"
            name="value"
            value={specValue}
            onChange={(e) => setSpecValue(e.target.value)}
          />
        </StyledInputGroup>
        <StyledButton type="button" onClick={addClickHandler}>
          Add
        </StyledButton>
      </StyledExtraSpecifications>
    </>
  );
};

export default AddSpecification;
