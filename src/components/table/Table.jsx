import React from "react";
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

const Table = ({
  headers,
  data,
  componentName,
  id_name,
  endPoint,
  deletable,
}) => {
  return (
    <StyledTableConainers>
      <StyledTableHead>
        <div>
          <StyledButton color="var(--white)" bgColor="var(--primary)">
            <Link to={"/create/product"}>Add Product</Link>
          </StyledButton>
        </div>
      </StyledTableHead>
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
