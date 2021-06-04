import React, { useState } from "react";
import styled from "styled-components";

// styled components
import { StyledWrapper } from "../../Styles/Styles";

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  background-color: red;
  padding: 0 1rem;
`;

const StyledListItem = styled.li`
  position: relative;
  padding: 25px;
  height: 100%;
  background-color: green;
  cursor: pointer;
  &:hover .navbar__dropdownContent {
    opacity: 1;
    pointer-events: all;
  }
`;

const StyledDropdown = styled.div``;

const StyledDropdownContent = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 15px);
  border-radius: 10px;
  transition: opacity 0.3s;
  opacity: 0;
  pointer-events: none;
  transition-delay: 0.2s;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    background-color: orange;
    transform-orign: 0 0;
    transform: rotate(45deg) translate(-50%, -50%);
  }
`;

const StyledListItemLink = styled.a`
  color: pink;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
    color: magenta;
  }
`;

const StyledDropdownLink = styled.a`
  text-decoration: none;
  color: red;
  white-space: nowrap;
  transition: all 0.3s;
  text-transform: capitalize;
  font-size: 1rem;
  &:hover {
    transform: translateX(10px);
  }
`;

function Navbar() {
  return (
    <StyledWrapper
      className="navbar"
      isFlex
      backgroundColor="blue"
      justifyContent="center"
      width="100%"
    >
      <StyledList className="navbar__list">
        <StyledListItem>
          <StyledListItemLink>Home</StyledListItemLink>
        </StyledListItem>
        <StyledListItem className="navbar__listItem">
          <StyledDropdown className="navbar__dropdown">
            <StyledListItemLink className="navbar__link">
              Dropdown
            </StyledListItemLink>
          </StyledDropdown>
          <StyledDropdownContent className="navbar__dropdownContent">
            <StyledDropdownLink>Success #1</StyledDropdownLink>
            <StyledDropdownLink>Success #1</StyledDropdownLink>
            <StyledDropdownLink>Success #1</StyledDropdownLink>
            <StyledDropdownLink>Success #1</StyledDropdownLink>
          </StyledDropdownContent>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemLink>About</StyledListItemLink>
        </StyledListItem>
        <StyledListItem className="navbar__listItem">
          <StyledDropdown className="navbar__dropdown">
            <StyledListItemLink className="navbar__link">
              Dropdown #2
            </StyledListItemLink>
          </StyledDropdown>
          <StyledDropdownContent className="navbar__dropdownContent">
            <StyledDropdownLink>Success #2</StyledDropdownLink>
            <StyledDropdownLink>Success #2</StyledDropdownLink>
            <StyledDropdownLink>Success #2</StyledDropdownLink>
            <StyledDropdownLink>Success #2</StyledDropdownLink>
          </StyledDropdownContent>
        </StyledListItem>
      </StyledList>
    </StyledWrapper>
  );
}

export default Navbar;

// position: absolute;
// width: 20px;
// height: 20px;
// top: 0;
// left: 50%;
// transform-origin: 0 0;
// transform: rotate(45deg) translate(-50%, -50%);
