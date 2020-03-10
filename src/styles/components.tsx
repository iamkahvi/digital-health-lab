import styled from "styled-components";

export const NavBarWrapper = styled.div`
  border: 2px solid black;
  border-width: 0 0 2px 0;
  width: 100%;
  padding: 1em 0;
  margin-bottom: 1em;
`;

export const NavBar = styled.nav`
  border-width: 0;
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: start;
`;

export const LinkWrapper = styled.span`
  padding-right: 2em;
`;

export const PageWrapper = styled.div`
  border: 2px solid black;
  max-width: 800px;
  margin: auto;
  padding: 1em 0;
`;
