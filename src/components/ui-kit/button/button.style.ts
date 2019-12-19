import styled from "styled-components";
import Button from "antd/es/button";

const ButtonStyle = (ComponentName: typeof Button) => styled(ComponentName)`
  background: ${props => props.theme.colors.buttonGradientBackgroud};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.sizes.font.l3};
  font-weight: bold;
  min-width: 120px;
  min-height: 40px;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secoundFont};
    background: ${props => props.theme.colors.buttonBackgroundHover};
    border: 1px solid ${props => props.theme.colors.secoundBorder};
  }
`;

export default ButtonStyle;
