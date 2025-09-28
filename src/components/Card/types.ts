import type { WeatherData } from "pages/Home/types";

export interface CardProps {
  currentObject: WeatherData;
  isSave?: boolean;
  onDel: () => void;
}
