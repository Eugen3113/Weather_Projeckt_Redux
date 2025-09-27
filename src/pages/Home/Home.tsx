import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import Input from "components/Input/input";
import { v4 as uuidv4 } from "uuid";

import {
  CreateWeatherContainer,
  CreateWeatherWrapper,
  InputsContainer,
  CardContainer,
  CityContainer,
  TempCityContainer,
  TempContainer,
  ButtonsContainer,
  RightColumn,
  LeftColumn,
  IconContainer,
} from "./styles";

import { WEATHER_FORM_VALUES } from "./types";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice";
import { CityWeather } from "store/redux/weather/types";

function CreateWeather() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    [WEATHER_FORM_VALUES.CITY]: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be no more than 50 characters")
      .required("Name is required"),
    // [WEATHER_FORM_VALUES.TEMP]: Yup.number()
    //   .min(2, "Surname must be at least 2 characters")
    //   .max(15, "Surname must be no more than 15 characters")
    //   .required("Surname is required"),
    // [WEATHER_FORM_VALUES.ICON]: Yup.string()
    //   .min(1, "Age must be at least 1 character")
    //   .max(3, "Age must be no more than 3 character")
    //   .required("Age is required"),
  });

  const formik = useFormik({
    initialValues: {
      [WEATHER_FORM_VALUES.CITY]: "",
      // [WEATHER_FORM_VALUES.TEMP]: 0,
      // [WEATHER_FORM_VALUES.ICON]: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(weatherActions.searchCity(values.city.trim()));
      //условный рендеринг по текущему объекту. Если в нем ошибка - карточка с ошибкой
      //если нормальные данные , карточка с погодой и двумя Button'ами "сохранить" и "удалить"
      //dispatch(weatherActions.addCity(newCity));
      const newCityWeater = navigate("/");
    },
  });

  const showCityCard = () => {
    return (
      <CardContainer>
        <TempCityContainer>
          <LeftColumn>
            <TempContainer>
              {`${useAppSelector(weatherSelectors.currentObject).temp}°`}
            </TempContainer>
            <CityContainer>
              {useAppSelector(weatherSelectors.currentObject).city}
            </CityContainer>
          </LeftColumn>
          <RightColumn>
            <IconContainer src={useAppSelector(weatherSelectors.currentObject).icon}></IconContainer>
            <IconContainer src={useAppSelector(weatherSelectors.currentObject).icon}></IconContainer>
            <IconContainer src={useAppSelector(weatherSelectors.currentObject).icon}></IconContainer>
          </RightColumn>
        </TempCityContainer>
        <ButtonsContainer>
          <Button name = "Save"/> 
          <Button name = "Delete" />
        </ButtonsContainer>
      </CardContainer>
    );
  };

  return (
    <CreateWeatherWrapper>
      <CreateWeatherContainer onSubmit={formik.handleSubmit}>
        <InputsContainer>
          <Input
            id="city-id"
            name={WEATHER_FORM_VALUES.CITY}
            type="text"
            placeholder=""
            label="city"
            value={formik.values[WEATHER_FORM_VALUES.CITY]}
            onChange={formik.handleChange}
            error={formik.errors[WEATHER_FORM_VALUES.CITY]}
          />

          {/* <Input
            id="temp-id"
            name={WEATHER_FORM_VALUES.TEMP}
            type="number"
            placeholder=""
            label="temp"
            value={formik.values[WEATHER_FORM_VALUES.TEMP]}
            onChange={formik.handleChange}
            error={formik.errors[WEATHER_FORM_VALUES.TEMP]}
          />
          <Input
            id="icon-id"
            name={WEATHER_FORM_VALUES.ICON}
            type="text"
            placeholder=""
            label="icon"
            value={formik.values[WEATHER_FORM_VALUES.ICON]}
            onChange={formik.handleChange}
            error={formik.errors[WEATHER_FORM_VALUES.ICON]}
          /> */}
        </InputsContainer>
        <Button name="Search" type="submit" />
      </CreateWeatherContainer>

      {showCityCard()}
    </CreateWeatherWrapper>
  );
}

export default CreateWeather;
