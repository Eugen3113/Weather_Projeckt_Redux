import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { CityWeather } from "./types"

export interface WeatherCitySliceState {
  citysweather: CityWeather[]
}

const weatherInitialState: WeatherCitySliceState = {
  citysweather: [],
}

export const weatherSlice = createAppSlice({
  name: "CITY_WEARTHER",
  initialState: weatherInitialState,

  reducers: create => ({
    addCity: create.reducer(
      (state: WeatherCitySliceState, action: PayloadAction<CityWeather>) => {
        state.citysweather.push(action.payload)
      },
    ),
    deleteCity: create.reducer(
      (state: WeatherCitySliceState, action: PayloadAction<string>) => {
        state.citysweather = state.citysweather.filter(
          citysweather => citysweather.id !== action.payload,
        )
      },
    ),

    deleteAllCitys: create.reducer(() => {
      return weatherInitialState
    }),
  }),

  selectors: {
    citysweather: state => state.citysweather,
  },
})

export const weatherActions = weatherSlice.actions
export const weatherSelectors = weatherSlice.selectors