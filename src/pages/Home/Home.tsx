import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/input";
import Card from "components/Card/Card";

import {
  CreateWeatherContainer,
  CreateWeatherWrapper,
  InputsContainer,
  LoadingContainer,
  LoadingMessage,
} from "./styles";

import { WEATHER_FORM_VALUES } from "./types";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice";
import ErrorCard from "components/ErrorCard/ErrorCard";

function CreateWeather() {
  const dispatch = useAppDispatch();

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
    },
  });
  const onDelete = () => {
    dispatch(weatherActions.deleteCurrentCity());
  };

  const currentObject = useAppSelector(weatherSelectors.currentObject);
  const errorObject = useAppSelector(weatherSelectors.error);
  const isFetching = useAppSelector(weatherSelectors.isFetching);

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
        </InputsContainer>
        <Button name="Search" type="submit" variant="search"/>
      </CreateWeatherContainer>
      {!!currentObject.city && (
        <Card currentObject={currentObject} isSave onDel={onDelete} />
      )}
      {!!isFetching && (
        <LoadingContainer>
          <LoadingMessage>{"LOADING ... "}</LoadingMessage>{" "}
        </LoadingContainer>
      )}

      {!!errorObject.cod && <ErrorCard errObject={errorObject} />}
    </CreateWeatherWrapper>
  );
}

export default CreateWeather;
