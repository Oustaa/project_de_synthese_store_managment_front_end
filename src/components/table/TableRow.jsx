import React, { useEffect, useState } from "react";
import { StyledTr, StyledTd } from "../../styles/styled-table";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledImage = styled.img`
  width: 100px;
  aspect-ratio: 1 / 0.8;
  object-fit: contain;
`;

const StyledProductDisplay = styled.td`
  border: 1px solid var(--dark-100);
  padding: var(--spacing-lg);
`;

const TableRow = ({ data, fields, id, name }) => {
  const [showDetailed, setShowDetailed] = useState(false);
  const displayedValues = fields.map((field, i) => {
    if (field.type === "image")
      return (
        <StyledTd key={i} className="image">
          <StyledImage
            src={`${process.env.REACT_APP_BASE_URL}/images/${
              data[field.value]
            }`}
          />
        </StyledTd>
      );
    else if (field.type === "date")
      return (
        <StyledTd key={i}>
          {new Date(data[field.value]).toLocaleDateString()}
        </StyledTd>
      );
    else if (
      data[field.value] !== null &&
      data[field.value] !== undefined &&
      data[field.value] !== ""
    )
      return <StyledTd key={i}>{data[field.value]}</StyledTd>;
    else if (field.default)
      return <StyledTd key={i}>{field.defaultValue}</StyledTd>;
    else if (field.checked)
      return <StyledTd key={i}>{field.check(data, i)}</StyledTd>;
    else return <StyledTd key={i}>none</StyledTd>;
  });

  const handelClick = () => {
    setShowDetailed(!showDetailed);
  };

  useEffect(() => {
    return setShowDetailed(false);
  }, []);

  return (
    <>
      <StyledTr onClick={handelClick}>{displayedValues}</StyledTr>
      {showDetailed && (
        <tr>
          <StyledProductDisplay colSpan="8" />
        </tr>
      )}
    </>
  );
};

export default TableRow;
