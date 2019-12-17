import styled from "styled-components";
import Button from "antd/es/button";

const ButtonStyle = (ComponentName: typeof Button) => styled(ComponentName)`
  background-color: ${props => props.theme.colors.mainBackground};
`;

export default ButtonStyle;
