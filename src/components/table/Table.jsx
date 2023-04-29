import React from "react";

// components
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

// styled components
import { StyledTableConainers, StyledTable } from "../../styles/styled-table";

const Table = ({
  headers,
  data,
  width,
  tableTitle,
  filter,
  componentName,
  alertTitle,
  id_name,
  endPoint,
  deletable,
}) => {
  return (
    <StyledTableConainers width={width}>
      {/* <StyledTableHead>
        <div>
          <h4>{tableTitle}</h4>
          <StyledButton color="var(--white)" bgColor="var(--primary-dark)">
            Add
          </StyledButton>
        </div>
        {/* {filter ? (
          <StyledButton onClick={openFilterAlertHandler} padding="var(--spacing-xsm)">
            <span>Filters </span>
            <MdFilterListAlt />
          </StyledButton>
        ) : null} }
      </StyledTableHead> */}
      <StyledTable>
        <TableHeader headers={headers} />
        <TableBody
          name={componentName}
          endPoint={endPoint}
          id_name={id_name}
          data={data}
          headers={headers}
          deletable={deletable}
        />
      </StyledTable>
    </StyledTableConainers>
  );
};

export default Table;
