import styled, { css } from "styled-components";
import {sharedStyles} from './Styles'
// Styled Button rendered by > App > Modal
const StyledButton = styled.button`
  ${sharedStyles}
 
  font-size: 1em;
  height: 40px;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);



  &:hover {
    cursor: pointer;
    border: solid 1px #da59b1;

    color: #da59b1;
    background: #ffffff;

    border-color: linear-gradient(to top right, #8162ce, #f54ba5);
    border-radius: 30px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`;

export { StyledButton };

// // Styled Button rendered by > App > Modal
// const StyledButton = styled.button`
//   background: ${(props) =>
//     props.primary && props.color
//       ? props.color
//       : props.primary
//       ? "grey"
//       : "papayawhip"};
//   color: ${(props) =>
//     props.primary && props.color
//       ? "papayawhip"
//       : props.primary
//       ? "papayawhip"
//       : props.color
//       ? props.color
//       : "grey"};
//   font-size: 1em;
//   height: 40px;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: none;
//   border-radius: 40px;
//   box-shadow: 0 13px 26px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.16);

//   &:hover {
//     cursor: pointer;
//     background: ${(props) =>
//       props.primary && props.color
//         ? "papayawhip"
//         : props.primary
//         ? "papayawhip"
//         : props.color
//         ? props.color
//         : "grey"};
//     color: ${(props) =>
//       props.primary && props.color
//         ? props.color
//         : props.color
//         ? "papayawhip"
//         : props.primary
//         ? "grey"
//         : "papayawhip"};
//   }
// `;
