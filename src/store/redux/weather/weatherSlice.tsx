import { createAppSlice } from "store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { CityWeather } from "./types";
import axios from "axios";
import { v4 } from "uuid";

export interface WeatherCitySliceState {
  citysweather: CityWeather[];
  currentObject: any;
  error: string | undefined;
  isFetching: boolean;
}

const weatherInitialState: WeatherCitySliceState = {
  citysweather: [],
  currentObject: undefined,
  error: undefined,
  isFetching: false,
};

export const weatherSlice = createAppSlice({
  name: "CITY_WEARTHER",
  initialState: weatherInitialState,

  reducers: (create) => ({
    addCity: create.reducer(
      (state: WeatherCitySliceState, action: PayloadAction<CityWeather>) => {
        state.citysweather.push(action.payload);
      }
    ),
    deleteCity: create.reducer(
      (state: WeatherCitySliceState, action: PayloadAction<string>) => {
        state.citysweather = state.citysweather.filter(
          (citysweather) => citysweather.id !== action.payload
        );
      }
    ),
    searchCity: create.asyncThunk(
      async (city: string, { rejectWithValue }) => {
        console.log(city);
        // Пример как делать POST запрос
        // const response = await axios.post(
        //   "https://official-joke-api.appspot.com/random_joke",
        //   dataFromComponent,
        // )
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=209195650874d2713f1cfa54cc73bdd1`
          );

          return response;
        } catch (error) {
          console.log(error);
          return rejectWithValue(error);
        }
        // Без обрабоки try ctacht
        // const response = await axios.post(
        //   "https://official-joke-api.appspot.com/random_joke",
        //   dataFromComponent,
        // )

        // return response
      },
      {
        pending: (state: WeatherCitySliceState) => {
          console.log("Pending");
          state.error = undefined;
          state.isFetching = true;
        },
        fulfilled: (state: WeatherCitySliceState, action) => {
          // Пишем логику, когда пришел положительные ответ от сервера и мы кладем пришедшие данные в наш массив в виде обьекта
          console.log("Fulfilled");
          state.currentObject = {city: action.payload.data.name, 
              icon: action.payload.data.weather[0].icon,
              temp: action.payload.data.main.temp,id: v4() };
          console.log(state.currentObject);
          state.isFetching = false;
        },
        rejected: (state: WeatherCitySliceState, action) => {
          // Пишем логику, когда нам пришла ошибка
          console.log("Rejected");
          state.isFetching = false;

          if (action.error.code === "ERR_BAD_REQUEST") {
            state.error = "Too Many Requests";
          } else {
            state.error = "Some Network Error";
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
  },
});

export const weatherActions = weatherSlice.actions;
export const weatherSelectors = weatherSlice.selectors;
