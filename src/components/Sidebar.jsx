import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FaFlagUsa } from 'react-icons/fa';
import Trump from '../assets/images/trump.png';
import Clinton from '../assets/images/clinton.png';

function Sidebar() {
  return (
    <Wrapper>
      <li>
        <USALogo />
      </li>
      <NavItem>
        <StyledLink exact to="#" activeClassName="active">
          <img src={Trump} alt='Donald Trump' />
          Donald Trump
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink exact to="#" activeClassName="active">
          <img src={Clinton} alt='Hilarly Clinton' />
          Hilarly Clinton
        </StyledLink>
      </NavItem>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  top: 40px;
  left: 90px;
`;

const NavItem = styled.li`
  border-radius: 25px;
  padding: 10px 0;

  .active {
    color: black;
  }

  &:hover {
    background-color: var(--light-blue);
  }
`;


const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 5px 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.4em;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

const USALogo = styled(FaFlagUsa)`
  font-size: 2.6em;
  margin-left: 40px;
`;

export default Sidebar;
