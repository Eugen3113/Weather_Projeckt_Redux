import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice";
import Card from "components/Card/Card";

import { ButtonControl, Cards, WeatherWrapper } from "./styles";

function Weathers() {
  const dispatch = useAppDispatch();

  const deleteWeather = (id: string) => {
    dispatch(weatherActions.deleteCity(id));
    alert("Deleted successfully");
  };

  const deleteAllCards = () => {
    dispatch(weatherActions.deleteAllCitys());
    alert("Deleted successfully");
  };
  const weathers = useAppSelector(weatherSelectors.citysweather);

  return (
    <WeatherWrapper>
      <Cards>
        {weathers.map((weather) => (
          <Card
            key={weather.id}
            currentObject={weather}
            onDel={() => deleteWeather(weather.id)}
          />
        ))}
      </Cards>

      {!!weathers.length && (
        <ButtonControl>
          <Button
            name="Delete all cards"
            variant="search"
            onClick={deleteAllCards}
          />
        </ButtonControl>
      )}
    </WeatherWrapper>
  );
}

export default Weathers;
