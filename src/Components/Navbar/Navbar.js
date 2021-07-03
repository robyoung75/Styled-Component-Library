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

function Navbar({ flexDirection, primaryColor, secondaryColor }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <StyledWrapper
      className="navbar"
      isFlex
      height="0"
      zIndex="3"
      flexDirection={flexDirection}
     
    >
      <StyledList
        className="navbar__list"
        isActive={isActive}
        isFlex
        flexDirection={flexDirection}
        justifyContent="center"
        alignItems="center"
      >
        <StyledListItem>
          <StyledListItemLink primaryColor={primaryColor}>
            Home
          </StyledListItemLink>
        </StyledListItem>
        <StyledListItem className="navbar__listItem">
          <StyledDropdown className="navbar__dropdown">
            <StyledListItemLink
              className="navbar__link"
              primaryColor={primaryColor}
            >
              Dropdown
            </StyledListItemLink>
          </StyledDropdown>
          <StyledDropdownContent
            className="navbar__dropdownContent"
            isFlex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #1
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #1
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #1
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #1
            </StyledDropdownLink>
          </StyledDropdownContent>
        </StyledListItem>
        <StyledListItem>
          <StyledListItemLink primaryColor={primaryColor}>
            About
          </StyledListItemLink>
        </StyledListItem>
        <StyledListItem className="navbar__listItem">
          <StyledDropdown className="navbar__dropdown">
            <StyledListItemLink
              className="navbar__link"
              primaryColor={primaryColor}
            >
              Dropdown #2
            </StyledListItemLink>
          </StyledDropdown>
          <StyledDropdownContent
            className="navbar__dropdownContent"
            isFlex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #2
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #2
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #2
            </StyledDropdownLink>
            <StyledDropdownLink secondaryColor={secondaryColor}>
              Success #2
            </StyledDropdownLink>
          </StyledDropdownContent>
        </StyledListItem>
      </StyledList>

      <Hamburger
        backgroundColor="rgba(143,68,253)"
        width="35px"
        height="35px"
        right="10px"
        top="10px"
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
