import React from "react";

import TableRow from "./TableRow";
import { StyledTableBody } from "../../styles/styled-table";

const TableBody = ({ data, headers, endPoint, deletable, name }) => {
  const fields = Object.values(headers).filter((field) => {
    return typeof field !== "function";
  });

  return (
    <StyledTableBody>
      {data.map((data, i) => {
        console.log(data);
        return (
          <TableRow
            endPoint={endPoint}
            deletable={deletable}
            key={i}
            id={data.id}
            data={data}
            fields={fields}
            name={name}
          />
        );
      })}
    </StyledTableBody>
  );
};

export default TableBody;
