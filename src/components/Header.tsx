import React from "react";
import { Link } from "@reach/router";
import { NavBar, NavBarWrapper, LinkWrapper } from "../styles/components";

export default function Header() {
  return (
    <NavBarWrapper>
      <NavBar>
        <LinkWrapper>
          <Link to="/">Home</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/login">Login</Link>
        </LinkWrapper>
      </NavBar>
    </NavBarWrapper>
  );
}
