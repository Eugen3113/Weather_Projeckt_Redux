export interface ROUTES_DATA {
  HOME: string;
  WEATHERS: string;
  NOT_FOUND: string;
}

export const ROUTES: ROUTES_DATA = {
  HOME: "/home",
  WEATHERS: "/weathers",
  NOT_FOUND: "*",
};

export enum NAV_MENU_ROUTES {
  Home = "/home",
  Weathers = "/weathers",
}
