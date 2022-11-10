import { Link } from "react-router-dom";
import { LogoIcon, LogoP, NavDiv, StyledLink } from "./StyledComponents";

export const NavBar = () => {
  return (
    <NavDiv>
      <NavDiv innerNav>
        <LogoIcon />
        <LogoP>My Learning Journal</LogoP>
      </NavDiv>
      <NavDiv innerNav>
        <StyledLink to="*">HOME</StyledLink>
        <StyledLink to="/aboutme">ABOUT ME</StyledLink>
      </NavDiv>
    </NavDiv>
  );
};
