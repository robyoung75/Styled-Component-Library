import styled from "styled-components";

import { flexStyles, sharedStyles, device } from "../ComponentStyles/ComponentStyles";
// Navbar Styles
const StyledList = styled.ul`
  ${(props) => props.isFlex && flexStyles}

  list-style: none;
  background-color: ${(props) => props.backgroundColor};
  
 
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
  padding: 2rem;
 
 
  width: ${(props) => props.listItemWidth};

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
      left: ${(props) => props.left || "62%"};
    }
  }

  .navbar__dropdownContentLeft {
    @media ${device.tablet} {
      left: ${(props) => props.left || "37%"};
    }
  }
`;

const StyledDropdown = styled.div`
  ${(props) => props.isFlex && flexStyles}
  ${sharedStyles}
`;

const StyledDropdownContent = styled.div`
  ${(props) => props.isFlex && flexStyles}
  background-color: ${(props) => props.backgroundColorDropdown};
  padding: 1.5rem 1rem;
  
  position: absolute;
  left: ${(props) => props.left};
  transform: translate(-50%, 15px);
  border-radius: 0.25rem;
  transition: opacity 0.5s;
  opacity: 0;
  pointer-events: none;
  transition-delay: 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: 0.25rem;
    background-color: ${(props) => props.backgroundColorDropdown};

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
    color: ${props => props.secondaryColor};
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
    transform: translateX(0.5rem);
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
