import { v4 } from "uuid";

import { NAV_MENU_ROUTES } from "../constants/navMenuRoutes";

import {
  LayoutWrapper,
  Header,
  Main,
  Logo,
  HeaderLink,
  NavigationContainer,
  navlinkProps,
} from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const headerLinks = Object.keys(NAV_MENU_ROUTES).map((route) => {
    return (
      <HeaderLink
        key={v4()}
        to={NAV_MENU_ROUTES[route as keyof typeof NAV_MENU_ROUTES]}
        style={({ isActive }) => navlinkProps(isActive)}
      >
        {route}
      </HeaderLink>
    );
  });
  return (
    <LayoutWrapper>
      <Header>
        <Logo> Weather App</Logo>
        <NavigationContainer>{headerLinks}</NavigationContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default Layout;
