import styled from "styled-components";

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavBarWrapper = styled.div`
  border: 2px solid black;
  border-width: 0 0 2px 0;
  width: 100%;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
`;

export const NavBar = styled.nav`
  border-width: 0;
  max-width: 800px;
  width: 800px;
  margin: 1em 1em;
  display: flex;
  justify-content: start;
`;

export const LinkWrapper = styled.span`
  padding-right: 2em;
`;

export const PageWrapper = styled.div`
  border: 2px solid black;
  /* background: red; */
  max-width: 800px;
  width: 100%;
  margin: 0 1em;
  padding: 1em 0.5em;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
`;
