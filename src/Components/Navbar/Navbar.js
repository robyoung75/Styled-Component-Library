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

function Navbar() {
  const [isActive, setIsActive] = useState(true);

  return (
    <StyledWrapper className="navbar" isFlex height="0" zIndex="3">
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "pink",
          borderRadius: "50%",
          width: 45,
          height: 45,
          position: "absolute",
          right: 5,
          top: 5,
          margin: 0,
          padding: 0,
          zIndex: 999,
        }}
        onClick={(e) => {
          e.preventDefault();
          handleEvent(isActive, setIsActive);
        }}
      >
        <span
          style={
            !isActive
              ? {
                  margin: "2px 0",
                  width: 15,
                  height: 2,
                  backgroundColor: "black",
                  transition: "all 0.3s",
                  transform: "translate(0, 6px) rotate(45deg)",
                }
              : {
                  margin: "2px 0",
                  width: 15,
                  height: 2,
                  backgroundColor: "black",
                  transition: "all 0.3s",
                }
          }
        ></span>
        <span
          style={
            !isActive
              ? {
                  margin: "2px 0",
                  width: 15,
                  height: 2,
                  backgroundColor: "black",
                  transition: "all 0.3s",
                  transform: "translateX(100px)",
                  opacity: 0,
                }
              : {
                  margin: "2px 0",
                  width: 15,
                  height: 2,
                  backgroundColor: "black",
                  transition: "all 0.3s",
                }
          }
        ></span>
        <span
          style={
            !isActive
              ? {
                  margin: "2px 0",
                  width: 15,
                  height: 2,
                  backgroundColor: "black",
                  transition: "all 0.3s",
                  transform: "translate(0, -6px) rotate(-45deg)",
                }
              : {
                  margin: "2px 0",
                  width: 15,
                  height: 2,
                  backgroundColor: "black",
                  transition: "all 0.3s",
                }
          }
        ></span>
      </div>
    </StyledWrapper>
  );
}

export default Navbar;
