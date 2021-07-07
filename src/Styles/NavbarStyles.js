import styled from "styled-components";

import { flexStyles } from "./Styles";
// Navbar Styles
const StyledList = styled.ul`
  ${(props) => props.isFlex && flexStyles}
  list-style: none;
  background-color: ${(props) => props.backgroundColor || "grey"};
  padding: 0 1rem;
  margin: 0;
  width: 100%;
  z-index: 999;
  transform: ${(props) =>
    props.isActive ? "translateY(-110%)" : "translateY(0%)"};
`;

const StyledListItem = styled.li`
  position: relative;
  padding: 25px;
  height: 100%;
  margin: 3px;
  width: ${props => props.listItemWidth || "100%"};

  &:hover .navbar__dropdownContent {
    opacity: 1;
    z-index: 1;
    pointer-events: all;
  }
`;

const StyledDropdown = styled.div``;

const StyledDropdownContent = styled.div`
  ${(props) => props.isFlex && flexStyles}
  background-color: ${(props) => props.backgroundColor || "lightgrey"};
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
    background-color: ${(props) => props.backgroundColor || "lightgrey"};
    transform-orign: 0 0;
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
    color: magenta;
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
