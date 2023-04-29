import React from "react";

import SideNavHeader from "./SideNavHeader";
import SideNavLinks from "./SideNavLinks";
import { StyledSidNav } from "../../../styles/styled-sideNav";

const SideNav = () => {
  return (
    <StyledSidNav open={true}>
      <SideNavHeader />
      <SideNavLinks />
    </StyledSidNav>
  );
};

export default SideNav;
