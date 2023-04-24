import React, { useState, useEffect } from "react";
import { StyledInputGroup } from "../../styles";

const StoreName = ({ setCanContinue, data, changeHandler }) => {
  const [name, setName] = useState("");

  const handelChange = (e) => {
    changeHandler(e);
    setName(e.target.value);
    if (name.length >= 6) setCanContinue(true);
    else setCanContinue(false);
  };

  useEffect(() => {
    setName(data.name);
    if (data.name.length >= 6) setCanContinue(true);
    else setCanContinue(false);
  }, [data]);

  return (
    <div>
      <StyledInputGroup>
        <h3>Enter your store name</h3>
        <input
          name="name"
          type="text"
          value={data.name}
          onChange={handelChange}
        />
        <p>
          Your store name should be unique, and consists of at least 6
          characters. and please keep in mind that it should be easy to remember
        </p>
      </StyledInputGroup>
    </div>
  );
};

export default StoreName;
