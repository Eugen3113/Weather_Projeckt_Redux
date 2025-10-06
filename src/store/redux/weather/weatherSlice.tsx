import { createAppSlice } from "store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { CityWeather, ErrorObject } from "./types";
import axios from "axios";
import { v4 } from "uuid";

export interface WeatherCitySliceState {
  citysweather: CityWeather[];         // храним массив сгородами
  currentObject: CityWeather;          // текущий объект
  error: ErrorObject;                  // ерор сообщение об ошибке
  isFetching: boolean;                 // происходит загрузка при поиске
}
const errorObjectInitialState: ErrorObject = {         // начальное состояние для этих объектов и обнулять состояние
  cod: "",
  message: "",
};

const currentObjectInitialState: CityWeather = {       // начальное состояние для этих объектов и обнулять состояние
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

export const weatherSlice = createAppSlice({                           // создание слайса
  name: "CITY_WEARTHER",                                               // имя слайса
  initialState: weatherInitialState,

  reducers: (create) => ({                                            // создание reducers (синхронное) 
    addCity: create.reducer((state: WeatherCitySliceState) => {
      state.citysweather.push(state.currentObject);                   // добавление города через push
    }),
    deleteCurrentCity: create.reducer((state: WeatherCitySliceState) => {   // удаление текущего города(уд-е карточки на Home страницы)
      state.currentObject = currentObjectInitialState;
    }),
    deleteCity: create.reducer(                                       // удаление города из списка(массива)
      (state: WeatherCitySliceState, action: PayloadAction<string>) => {
        state.citysweather = state.citysweather.filter(                // через filter
          (citysweather) => citysweather.id !== action.payload
        );
      }
    ),
    deleteErrorCard: create.reducer((state) => {                   // удаление карточки с ошибкой в Home
      state.error = errorObjectInitialState;
    }),
    searchCity: create.asyncThunk(                             // асинхронная фу-я: поиск города
      async (city: string, { rejectWithValue }) => {
        try {                                             // через try-catch обрабатываем ошибку
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=209195650874d2713f1cfa54cc73bdd1`
          );
          return response;
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        pending: (state: WeatherCitySliceState) => {          // три состояния: pending,fulfilld,rejected
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


// Три состояния — pending, fulfilled, и rejected — часто используются в программировании, особенно при работе с асинхронными операциями,
//  такими как Promises в JavaScript. Вот краткое объяснение каждого:
// 🔄 1.  — ожидание
// • 	Операция началась, но ещё не завершилась.
// • 	Promise находится в процессе выполнения.
// • 	Ни результат, ни ошибка ещё не известны.
// ✅ 2.  — выполнено
// • 	Операция завершилась успешно.
// • 	Promise вернул результат.
// • 	Можно получить доступ к значению через .
// ❌ 3.  — отклонено
// • 	Операция завершилась с ошибкой.
// • 	Promise вернул причину отказа.
// • 	Обрабатывается через .
