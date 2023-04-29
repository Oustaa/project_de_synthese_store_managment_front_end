import React from "react";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { StyledNavLinks } from "../../../styles/styled-sideNav";
import { StyledButton } from "../../../styles/";
import { logout } from "../../../features/auth-slice";

function isActive({ isActive }) {
  return isActive ? "active" : "";
}

const links = [
  { to: "/dashboard", text: "Dashboard" },
  { to: "/products", text: "Products" },
  { to: "/orders", text: "Orders" },
  { to: "/setting", text: "Setting" },
];

const SideNavLinks = () => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logout());
    localStorage.clear();
  };

  return (
    <StyledNavLinks>
      {links.map(({ to, text }, id) => (
        <NavLink key={id} className={isActive} to={to}>
          {text}
        </NavLink>
      ))}
      <StyledButton onClick={logOutHandler} bg="">
        log out
      </StyledButton>
    </StyledNavLinks>
  );
};

export default SideNavLinks;
