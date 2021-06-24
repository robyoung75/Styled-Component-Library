import styled from "styled-components";

// Navbar Styles
const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  background-color: grey;
  padding: 0 1rem;
  margin: 0;
  width: 100%;
  opacity: 1;
  transform: ${(props) =>
    props.isActive ? "translateY(-110%)" : "translateY(0%)"};
`;

const StyledListItem = styled.li`
  position: relative;
  padding: 25px;
  height: 100%;

  margin: 3px;
  cursor: pointer;
  width: 100%;

  &:hover .navbar__dropdownContent {
    opacity: 1;
    z-index: 1;
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
    background-color: orange;
    transform-orign: 0 0;
    transform: rotate(45deg) translate(-50%, -50%);
  }
`;

const StyledListItemLink = styled.a`
  color: pink;
  text-decoration: none;
  display: block;
  text-align: center;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.15);
    color: magenta;
  }
`;

const StyledDropdownLink = styled.a`
  text-decoration: none;
  color: red;
  white-space: nowrap;
  transition: all 0.3s;

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
