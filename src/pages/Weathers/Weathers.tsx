import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice";

import { ButtonControl, Cards, WeatherWrapper } from "./styles";

function Weathers() {
  const dispatch = useAppDispatch();
  //   const weathers = useAppSelector(weatherSelectors.cityweather)

  const deleteWeather = (id: string) => {
    dispatch(weatherActions.deleteCity(id));
  };

  const deleteAllCards = () => {
    dispatch(weatherActions.deleteAllCitys());
  };

  return (
    <WeatherWrapper>
      {/* <Cards>
        {weathers.map(weather => (
          <Card
            key={weather.id}
            userData={weather}
            onDelete={() => deleteWeather(weather.id)}
          />
        ))}
      </Cards> */}
      {/* 
      {!!weathers.length && (
        <ButtonControl>
          <Button name="Remove All Weathers" isRed onClick={deleteAllCards} />
        </ButtonControl>
      )} */}
    </WeatherWrapper>
  );
}

export default Weathers;
