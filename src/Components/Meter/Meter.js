import React from "react";

import { StyledMeter } from "../../Styles/MeterStyles";

import styled from "styled-components";
import { StyledLabel, StyledP } from "../../Styles/Styles";

const SyledLabel = styled.label``;
function Meter({ width, height, value, label, children, fontSize }) {
  return (
    <StyledLabel>
   
      <StyledP color="#fff" fontSize={fontSize}>{label ? label : null}</StyledP>
      <StyledP color="#fff" fontSize={fontSize}>{children}</StyledP>
     
      <StyledMeter
        value={value}
        min="0"
        max="10"
        width={width}
        height={height}
      ></StyledMeter>


    </StyledLabel>
  );
}

export default Meter;