import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice";
import type { CardProps } from "./types"; 
import Button from "components/Button/Button";
import {
  CardContainer,
  CityContainer,
  TempCityContainer,
  TempContainer,
  ButtonsContainer,
  RightColumn,
  LeftColumn,
  IconContainer,
} from "./styles";

function Card({currentObject, isSave = false , onDel} : CardProps) {
  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(weatherActions.addCity());
  };
 
  return (
    <CardContainer>
      <TempCityContainer>
        <LeftColumn>
          <TempContainer>{`${currentObject.temp}°`}</TempContainer>
          <CityContainer>{currentObject.city}</CityContainer>
        </LeftColumn>
        <RightColumn>
          <IconContainer src={currentObject.icon}></IconContainer>
          <IconContainer src={currentObject.icon}></IconContainer>
          <IconContainer src={currentObject.icon}></IconContainer>
        </RightColumn>
      </TempCityContainer>
      <ButtonsContainer>
        {isSave && <Button name="Save" onClick={onSave} />}
        <Button name="Delete" onClick={onDel} />
      </ButtonsContainer>
    </CardContainer>
  );
}

export default Card;
