import { createAppSlice } from "store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { CityWeather, ErrorObject } from "./types";
import axios from "axios";
import { v4 } from "uuid";

export interface WeatherCitySliceState {
  citysweather: CityWeather[];
  currentObject: CityWeather;
  error: ErrorObject;
  isFetching: boolean;
}
const errorObjectInitialState: ErrorObject = {
  cod: "",
  message: "",
};

const currentObjectInitialState: CityWeather = {
  city: "",
  temp: 0,
  id: "",
  icon: "",
};
const weatherInitialState: WeatherCitySliceState = {
  citysweather: [],
  currentObject: currentObjectInitialState,
  error: errorObjectInitialState,
  isFetching: false,
};

export const weatherSlice = createAppSlice({
  name: "CITY_WEARTHER",
  initialState: weatherInitialState,

  reducers: (create) => ({
    addCity: create.reducer((state: WeatherCitySliceState) => {
      state.citysweather.push(state.currentObject);
    }),
    deleteCurrentCity: create.reducer((state: WeatherCitySliceState) => {
      state.currentObject = currentObjectInitialState;
    }),
    deleteCity: create.reducer(
      (state: WeatherCitySliceState, action: PayloadAction<string>) => {
        state.citysweather = state.citysweather.filter(
          (citysweather) => citysweather.id !== action.payload
        );
      }
    ),
    deleteErrorCard: create.reducer((state) => {
      state.error = errorObjectInitialState;
    }),
    searchCity: create.asyncThunk(
      async (city: string, { rejectWithValue }) => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=209195650874d2713f1cfa54cc73bdd1`
          );
          return response;
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: WeatherCitySliceState) => {
          state.error = errorObjectInitialState;
          state.isFetching = true;
        },
        fulfilled: (state: WeatherCitySliceState, action) => {
          state.currentObject = {
            city: action.payload.data.name,
            icon: `http://openweathermap.org/img/w/${action.payload.data.weather[0].icon}.png`,
            temp: Math.round(action.payload.data.main.temp),
            id: v4(),
          };
          state.isFetching = false;
        },
        rejected: (state: WeatherCitySliceState, action) => {
          state.isFetching = false;
          if (action.payload) {
            state.currentObject = currentObjectInitialState;
            const errPayload: any = action.payload;
            state.error = errPayload.response.data;
          } else {
            state.error = {
              cod: "General error",
              message: "Some network error",
            };
          }
        },
      }
    ),

    deleteAllCitys: create.reducer(() => {
      return weatherInitialState;
    }),
  }),

  selectors: {
    citysweather: (state) => state.citysweather,
    currentObject: (state) => state.currentObject,
    error: (state) => state.error,
    isFetching: (state) => state.isFetching,
  },
});

export const weatherActions = weatherSlice.actions;
export const weatherSelectors = weatherSlice.selectors;
