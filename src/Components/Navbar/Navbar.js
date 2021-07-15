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
  isActive,
  setActive,
  modalActive,
  setModalActive,
  flexDirection,
  primaryColor,
  secondaryColor,
  listItemWidth,
  backgroundColor,
  isFlex,
  justifyContent,
  alignItems,
  backgroundColorDropDown,
  left,
  height,
}) {
  return (
    <StyledWrapper
      backgroundColor={backgroundColor}
      height={height}
      position="fixed"
      isFlex
      justifyContent={justifyContent}
      zIndex="3"
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
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            alignItems={justifyContent}
            backgroundColorDropdown={backgroundColorDropDown}
            left={left}
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
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            alignItems={justifyContent}
            backgroundColorDropdown={backgroundColorDropDown}
            left={left}
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
        <StyledListItem
          listItemWidth={listItemWidth}
          onClick={(e) => {
            e.preventDefault();
            handleEvent(modalActive, setModalActive);
            handleEvent(isActive, setActive);
          }}
        >
          <StyledListItemLink primaryColor={primaryColor}>
            Login
          </StyledListItemLink>
        </StyledListItem>
      </StyledList>

      <Hamburger
        isActive={isActive}
        onClick={(e) => {
          e.preventDefault();
          handleEvent(isActive, setActive);
        }}
      />
    </StyledWrapper>
  );
}

Navbar.defaultProps = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "alignItems",
  primaryColor: "rgba(255,255,255,.89)",
  secondaryColor: "rgba(131,58,180,1)",
  backgroundColor: "#31394d",
  listItemWidth: "100%",
  backgroundColorDropDown: "rgba(255,255,255,.9)",
  left: "50%",
  height: "55px",
};

export default Navbar;
