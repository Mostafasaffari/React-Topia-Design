import styled from "styled-components";

const AppBarWrapper = styled.div`
  .trigger {
    margin-left: ${props => props.theme.sizes.spacing.s3};
    font-size: ${props => props.theme.sizes.font.l5};
  }
`;

export default AppBarWrapper;
