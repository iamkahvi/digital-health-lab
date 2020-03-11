import React from "react";
import { NavBar, NavBarWrapper, NavBarLink } from "../styles/components";

const isActive = ({ isCurrent }: any) => {
  return {
    style: {
      textDecoration: isCurrent ? "underline" : "none"
    }
  };
};

export default function Header() {
  return (
    <NavBarWrapper>
      <NavBar>
        <NavBarLink getProps={isActive} to="/">
          Home
        </NavBarLink>
        <NavBarLink getProps={isActive} to="/about">
          About
        </NavBarLink>
      </NavBar>
    </NavBarWrapper>
  );
}
