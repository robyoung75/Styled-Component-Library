import React from "react";

import { StyledMeter } from "../../Styles/MeterStyles";

import styled from "styled-components";
import { StyledLabel, StyledP } from "../../Styles/Styles";

const SyledLabel = styled.label``;
function Meter({ width, height, value, label, children }) {
  return (
    <StyledLabel>
      <StyledP color="#fff">{label ? label : null}</StyledP>
      <StyledP color="#fff">{children}</StyledP>
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
