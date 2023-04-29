import React from "react";
import { Outlet } from "react-router-dom/dist";

import Sidenav from "./sidenav/SideNav";

import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;

  main {
    width: calc(100% - 300px);
    margin-inline-start: var(--spacing-lg);
  }
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Sidenav />
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  );
};

export default Layout;
