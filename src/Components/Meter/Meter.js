import { StyledLabel, StyledP } from "../../Styles/Styles";
import { StyledMeter } from "../../Styles/MeterStyles";

function Meter({
  width,
  height,
  value,
  label,
  children,
  fontSize,
  minVal,
  maxVal,
  color,
  backgroundColor,
  backgroundImage,
}) {
  return (
    <StyledLabel>
      <StyledP color={color} fontSize={fontSize}>
        {label ? label : null}
      </StyledP>
      <StyledP color={color} fontSize={fontSize}>
        {children}
      </StyledP>

      <StyledMeter
        value={value}
        min={minVal}
        max={maxVal}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
      ></StyledMeter>
    </StyledLabel>
  );
}

Meter.defaultProps = {
  label: 'Enter Label Prop',
  value: 5,
  width: '200px',
  height: '25px',
  fontSize: '.75rem',
  minVal: 0,
  maxVal: 10,
  color: 'rgba(255,255,255,.6)',
  backgroundColor: 'rgba(255,255,255,.6)',
  backgroundImage: 'linear-gradient(90deg, #8162ce, #f54ba5)'
}

export default Meter;
