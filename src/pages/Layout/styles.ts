import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import background from "assets/background.jpg";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${background}) no-repeat center/cover;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 10px 80px;
  gap: 10px;
  background-color: #122d4d4d;
  color: white;
  border: 1px solid #d2d2d2;
  backdrop-filter: blur(8px);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
  cursor: pointer;
  font-size: 24px;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 45px;
  height: 100%;
  align-items: center;
`;
export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  font-weight: normal;
  color: white;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 100px;
`;

export const navlinkProps = (isActive: boolean) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});
