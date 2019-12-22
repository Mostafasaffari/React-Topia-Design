import styled from "styled-components";

const SideBarWrapper = styled.div`
  .sidebar--logo {
    font-size: ${props => props.theme.sizes.font.l5};
    color: ${props => props.theme.colors.font.light};
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: ${props => props.theme.sizes.spacing.l3};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    letter-spacing: 4px;
  }
`;

export default SideBarWrapper;
