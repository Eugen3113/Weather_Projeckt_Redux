import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import Input from "components/Input/input";
import { v4 as uuidv4 } from "uuid";

import {  CreateWeatherContainer,
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
  });

  const formik = useFormik({
    initialValues: {
      [WEATHER_FORM_VALUES.CITY]: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(weatherActions.searchCity(values.city.trim()));
      //const newCityWeater = navigate("/");
    },
  });

  const onSave = () => {
    dispatch(weatherActions.addCity())
  }
  const currentObject = useAppSelector(weatherSelectors.currentObject);
  const showCityCard = () => {
    return (
      <CardContainer>
        <TempCityContainer>
          <LeftColumn>
            <TempContainer>
              {`${currentObject.temp}°`}
            </TempContainer>
            <CityContainer>{currentObject.city}</CityContainer>
          </LeftColumn>
          <RightColumn>
            <IconContainer src={currentObject.icon}></IconContainer>
            <IconContainer src={currentObject.icon}></IconContainer>
            <IconContainer src={currentObject.icon}></IconContainer>
          </RightColumn>
        </TempCityContainer>
        <ButtonsContainer>
          <Button name = "Save" onClick={onSave}/> 
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
        <Button name="Search" type="submit" />
         </InputsContainer>
      </CreateWeatherContainer>

      {showCityCard()}
    </CreateWeatherWrapper>
  );
}

export default CreateWeather;
