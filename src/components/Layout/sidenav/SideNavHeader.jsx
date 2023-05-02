import React from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { StyledButton } from "../../../styles";
import { StyledHeader } from "../../../styles/styled-sideNav";

const SideNavHeader = () => {
  return (
    <StyledHeader>
      {/* image logo */}
      {/* <img src="./images/logo-text.png" alt="payonix text logo" /> */}
      <h2>Logo</h2>
      <StyledButton bgColor="transparent" color="var(--dark-800)">
        <BsLayoutSidebarInset />
      </StyledButton>
    </StyledHeader>
  );
};

export default SideNavHeader;
