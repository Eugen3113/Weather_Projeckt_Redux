import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"

import { NAV_MENU_ROUTES } from "../constants/navMenuRoutes"

import {
  LayoutWrapper,
  Header,
  Main,
  Logo,
  HeaderLink,
  NavigationContainer,
  navlinkProps,
} from "./styles"
import { type LayoutProps } from "./types"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToNavCreateWeather = () => {
    navigate("/Home")
  }

  const headerLinks = Object.keys(NAV_MENU_ROUTES).map(route => {
    return (
      <HeaderLink
        key={v4()}
        to={NAV_MENU_ROUTES[route as keyof typeof NAV_MENU_ROUTES]}
        style={({ isActive }) => navlinkProps(isActive)}
      >
        {route}
      </HeaderLink>
    )
  })

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToNavCreateWeather}> Weather App</Logo>
        <NavigationContainer>{headerLinks}</NavigationContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
