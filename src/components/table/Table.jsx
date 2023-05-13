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
import Alert from "../Alert";
const Table = ({
  headers,
  data,
  componentName,
  id_name,
  endPoint,
  deletable,
}) => {
  const [productId, setProductId] = useState(null);

  return (
    <>
      <Alert></Alert>
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
            data={data}
            headers={headers}
            setProductId={setProductId}
          />
        </StyledTable>
      </StyledTableConainers>
    </>
  );
};

export default Table;
