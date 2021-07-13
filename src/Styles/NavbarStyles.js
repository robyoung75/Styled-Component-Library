import styled from "styled-components";

import { flexStyles, sharedStyles, device } from "./Styles";
// Navbar Styles
const StyledList = styled.ul`
  ${(props) => props.isFlex && flexStyles}

  list-style: none;
  background-color: ${(props) => props.backgroundColor || "grey"};
  padding: 0;
  margin: 0;
  z-index: 8;
  transform: ${(props) =>
    props.isActive ? "translateY(-110%)" : "translateY(0%)"};
  opacity: ${(props) => (props.isActive ? 0 : 1)};
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledListItem = styled.li`
  padding: 25px;
  height: 100%;
  margin: 3px;
  width: ${(props) => props.listItemWidth || "100%"};
 

  &:hover .navbar__dropdownContentLeft {
    opacity: 1;
    z-index: 1;
    pointer-events: all;
    display: flex;
  }

  &:hover .navbar__dropdownContentRight {
    opacity: 1;
    z-index: 1;
    pointer-events: all;
    display: flex;
  }

  .navbar__dropdownContentRight {
    @media ${device.tablet} {
      left: 87%;
    }
  }

  .navbar__dropdownContentLeft {
    @media ${device.tablet} {
      left: 37%;
    }
  }
`;

const StyledDropdown = styled.div`
  ${(props) => props.isFlex && flexStyles}
  ${sharedStyles}
`;

const StyledDropdownContent = styled.div`
  ${(props) => props.isFlex && flexStyles}
  background-color: ${(props) => props.backgroundColor};
  padding: 30px 15px;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 15px);
  border-radius: 10px;
  transition: opacity 0.5s;
  opacity: 0;
  pointer-events: none;
  transition-delay: 0.3s;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    background-color: ${(props) => props.backgroundColor};

    transform: rotate(45deg) translate(-50%, -50%);
  }
`;

const StyledListItemLink = styled.a`
color: ${(props) => props.primaryColor};
text-decoration: none;
display: block;
text-align: center;
transition: all 0.3s;
&:hover {
  transform: scale(1.15);
  color: #8162ce;
  cursor: pointer;
}
`;

const StyledDropdownLink = styled.a`
text-decoration: none;
color: ${(props) => props.secondaryColor};
white-space: nowrap;
transition: all 0.3s;
cursor: pointer;
font-size: 1rem;
&:hover {
  transform: translateX(5px);
}
`;

export {
  StyledList,
  StyledListItem,
  StyledDropdown,
  StyledDropdownContent,
  StyledListItemLink,
  StyledDropdownLink,
};
