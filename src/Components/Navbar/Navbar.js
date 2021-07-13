import React, { useState } from "react";

// Styles Styled Components
import { StyledWrapper, StyledP } from "../../Styles/Styles";
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

function Navbar({
  flexDirection,
  primaryColor,
  secondaryColor,
  listItemWidth,
  backgroundColor,
  display,
  isFlex,
}) {
  const [isActive, setIsActive] = useState(true);

  return (
    <StyledWrapper
      backgroundColor="#31394d"
      height="55px"
      position="fixed"
      isFlex
      justifyContent="center"
      zIndex="10"
    >
      <StyledList
        className="navbar__list"
        isActive={isActive}
        isFlex={isFlex}
        flexDirection={flexDirection}
        backgroundColor={backgroundColor}
        justifyContent="space-evenly"
      >
        <StyledListItem listItemWidth={listItemWidth}>
          <StyledListItemLink primaryColor={primaryColor}>
            Home
          </StyledListItemLink>
        </StyledListItem>
        <StyledListItem
          className="navbar__listItem"
          listItemWidth={listItemWidth}
        >
          <StyledDropdown className="navbar__dropdown">
            <StyledListItemLink
              className="navbar__link"
              primaryColor={primaryColor}
            >
              Dropdown
            </StyledListItemLink>
          </StyledDropdown>
          <StyledDropdownContent
            className="navbar__dropdownContentLeft"
            isFlex={isFlex}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgba(255,255,255,.9)"
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
        <StyledListItem listItemWidth={listItemWidth}>
          <StyledListItemLink primaryColor={primaryColor}>
            About
          </StyledListItemLink>
        </StyledListItem>
        <StyledListItem
          className="navbar__listItem"
          listItemWidth={listItemWidth}
        >
          <StyledDropdown className="navbar__dropdown">
            <StyledListItemLink
              className="navbar__link"
              primaryColor={primaryColor}
            >
              Dropdown #2
            </StyledListItemLink>
          </StyledDropdown>
          <StyledDropdownContent
            className="navbar__dropdownContentRight"
            isFlex={isFlex}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgba(255,255,255,.9)"
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
