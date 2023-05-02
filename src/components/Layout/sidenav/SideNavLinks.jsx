import React from "react";

import { NavLink } from "react-router-dom";

import { StyledNavLinks, StyledNavLink } from "../../../styles/styled-sideNav";
import {
  BsHouse,
  BsShop,
  BsReverseListColumnsReverse,
  BsGear,
} from "react-icons/bs";

function isActive({ isActive }) {
  return isActive ? "active" : "";
}

const links = [
  { to: "/dashboard", text: "Dashboard", icon: <BsHouse /> },
  { to: "/products", text: "Products", icon: <BsShop /> },
  { to: "/orders", text: "Orders", icon: <BsReverseListColumnsReverse /> },
  { to: "/setting", text: "Setting", icon: <BsGear /> },
];

const SideNavLinks = () => {
  return (
    <StyledNavLinks>
      {links.map(({ to, text, icon }, id) => (
        <NavLink key={id} className={isActive} to={to}>
          <StyledNavLink>
            {icon}
            <span>{text}</span>
          </StyledNavLink>
        </NavLink>
      ))}
    </StyledNavLinks>
  );
};

export default SideNavLinks;
