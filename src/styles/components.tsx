import styled from "styled-components";
import { Link } from "@reach/router";

export const NavBarLink = styled(Link)`
  font-weight: 700;
  margin-right: 2.25em;
  font-size: 1.25em;
  color: black;
`;

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

export const PageWrapper = styled.div`
  border: 2px solid black;
  max-width: 50em;
  width: 100%;
  margin: 0 1em 1em 1em;
  padding: 1em;
  box-sizing: border-box;
`;

export const TextWrapper = styled.div`
  box-sizing: border-box;
  text-align: left;
  h1 {
    margin-top: 0;
    padding: 0;
  }
  h2 {
    margin-bottom: 0;
    padding: 0;
  }
  p {
    font-family: "Arial";
    line-height: 1.5em;
  }
  img {
    max-width: 500px;
    width: 100%;
    display: block;
    margin: 2em auto;
  }
`;
