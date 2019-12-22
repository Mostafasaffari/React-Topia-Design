import styled from "styled-components";

const AppBarWrapper = styled.div`
  .appbar__header {
    background: ${props => props.theme.colors.background.appBar};
    padding: 0;
    .appbar__header--trigger {
      margin-left: ${props => props.theme.sizes.spacing.s3};
      font-size: ${props => props.theme.sizes.font.l5};
    }
  }
`;

export default AppBarWrapper;
