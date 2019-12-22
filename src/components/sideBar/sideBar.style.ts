import styled from "styled-components";

const SideBarWrapper = styled.div`
  .sidebar {
    .sidebar__logo {
      font-size: ${props => props.theme.sizes.font.l5};
      color: ${props => props.theme.colors.font.light};
      height: 32px;
      background: ${props => props.theme.colors.background.hoverLight};
      margin: ${props => props.theme.sizes.spacing.l3};
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      letter-spacing: 4px;
    }
    .sidebar__menu {
      background: ${props => props.theme.colors.background.sideBar};
      border: 0;
      .ant-menu-item-selected {
        background: ${props => props.theme.colors.background.hoverLight};
      }
      .sidebar__menu-items {
        &:hover {
          background: ${props => props.theme.colors.background.hoverLight};
        }
        .sidebar__menu-items--i,
        .sidebar__menu-items--span {
          color: ${props => props.theme.colors.font.light};
        }
      }
    }
  }
`;

export default SideBarWrapper;
