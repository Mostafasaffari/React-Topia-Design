import styled from "styled-components";
import Button from "antd/es/button";

const ButtonStyle = (ComponentName: typeof Button) => styled(ComponentName)`
  background-color: ${props => props.theme.colors.main[0]};
`;

export default ButtonStyle;
