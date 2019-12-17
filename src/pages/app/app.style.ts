import styled from "styled-components";

const AppWrapper = styled.div`
  h1 {
    color: ${props => props.theme.colors.main[0]};
  }
`;

export default AppWrapper;
