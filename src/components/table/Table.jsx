import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

// styled components
import {
  StyledTableConainers,
  StyledTable,
  StyledTableHead,
} from "../../styles/styled-table";
import { StyledButton } from "../../styles/";

const Table = ({ headers, data, emptyMessage }) => {
  return (
    <StyledTableConainers>
      <StyledTableHead>
        <div>
          <StyledButton color="var(--white)" bgColor="var(--primary)">
            <Link to={"/create/product"}>Add Product</Link>
          </StyledButton>
        </div>
      </StyledTableHead>
      {data.length > 0 ? (
        <StyledTable>
          <TableHeader headers={headers} />
          <TableBody data={data} headers={headers} />
        </StyledTable>
      ) : (
        emptyMessage
      )}
    </StyledTableConainers>
  );
};

export default Table;
