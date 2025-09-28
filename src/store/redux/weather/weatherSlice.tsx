import { createAppSlice } from "store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { CityWeather, ErrorObject } from "./types";
import axios from "axios";
import { v4 } from "uuid";
import { error } from "console";

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
      console.log(state.citysweather);
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
    searchCity: create.asyncThunk(
      async (city: string, { rejectWithValue }) => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=209195650874d2713f1cfa54cc73bdd1`
          );

          return response;
        } catch (error) {
          console.log(error);
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: WeatherCitySliceState) => {
          console.log("Pending");
          state.error = errorObjectInitialState;
          state.isFetching = true;
        },
        fulfilled: (state: WeatherCitySliceState, action) => {
          console.log("Fulfilled");
          state.currentObject = {
            city: action.payload.data.name,
            icon: `http://openweathermap.org/img/w/${action.payload.data.weather[0].icon}.png`,
            temp: Math.round(action.payload.data.main.temp),
            id: v4(),
          };
          console.log(state.currentObject);
          state.isFetching = false;
        },
        rejected: (state: WeatherCitySliceState, action) => {
          console.log("REJECTED");
          // Пишем логику, когда нам пришла ошибка
          state.isFetching = false;
          state.currentObject = currentObjectInitialState;
          if (action.error.code === "ERR_BAD_REQUEST") {
            state.error = {message : "Too Many Requests", cod :"404"} ;
          } else {
                  
          state.error = {
            cod: "302",
             message: "erunda",
          };}
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