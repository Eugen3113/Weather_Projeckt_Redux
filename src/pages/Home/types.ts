export enum WEATHER_FORM_VALUES {
  CITY = "city",
  TEMP = "temp",
  ICON = "icon",
}

export interface WeatherData {
  city: string
  temp: number
  icon: string
}