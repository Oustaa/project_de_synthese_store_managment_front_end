import React from "react";
import {
  StyledNavBar,
  StyledHeader,
  StyledLogo,
  StyledSearchForm,
  StyledActions,
  StyledNav,
  StyledLinks,
} from "../../styles/styled-header";
import { Link } from "react-router-dom";
import { BsCart, BsPerson } from "react-icons/bs";
const Header = () => {
  return (
    <StyledNavBar>
      <StyledHeader>
        <StyledLogo>
          <div className="img"></div>
          <span>Logo</span>
        </StyledLogo>
        <StyledSearchForm>
          <input placeholder="Search...." type="text" />
          <button>Search</button>
        </StyledSearchForm>
        <StyledActions>
          <button>
            Log in <BsPerson />
          </button>
          <button>
            Your Cart <BsCart />
          </button>
        </StyledActions>
      </StyledHeader>
      <StyledNav>
        <StyledLinks>
          <a href="/">Category</a>
          <a href="/">Category</a>
          <a href="/">Category</a>
          <a href="/">Category</a>
          <a href="/">Category</a>
          <a href="/">Category</a>
        </StyledLinks>
        <StyledLinks>
          <Link to="/store.com/create">Create Store</Link>
          <Link to="/store.com">Your Store</Link>
        </StyledLinks>
      </StyledNav>
    </StyledNavBar>
  );
};

export default Header;
