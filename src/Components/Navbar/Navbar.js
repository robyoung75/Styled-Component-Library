import React, { useState } from "react";

// Styles Styled Components
import { StyledWrapper } from "../../Styles/Styles";
import {
  StyledList,
  StyledListItem,
  StyledListItemLink,
  StyledDropdown,
  StyledDropdownContent,
  StyledDropdownLink,
} from "../../Styles/NavbarStyles";

import { handleEvent } from "../../Assets/eventHandlers/eventHandlers";

import Hamburger from "../Hamburger/Hamburger";

function Navbar() {
  const [isActive, setIsActive] = useState(true);

  return (
    <StyledWrapper
      className="navbar"
      isFlex
      height="0"
      zIndex="3"
      flexDirection="column"
    >
      <StyledList className="navbar__list" isActive={isActive}>
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

      <Hamburger
        isFlex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="pink"
        borderRadius="50%"
        width="35px"
        height="35px"
        zIndex="999"
        position="absolute"
        right="3px"
        top="3px"
        onClick={(e) => {
          e.preventDefault();
          handleEvent(isActive, setIsActive);
        }}
        isActive={isActive}
      />
    </StyledWrapper>
  );
}

export default Navbar;
