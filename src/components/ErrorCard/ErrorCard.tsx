import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice";

import Button from "components/Button/Button";
import {
  CardContainer,
  Info,
  ErrorCode,
  ErrorMessage,
  ButtonsContainer
} from "./styles";

import { ErrorObject } from "store/redux/weather/types";
import { ErrorCardProps } from "./types";


function ErrorCard({ errObject }: ErrorCardProps) {

  const onDel = () => {
    alert("OnDEL");
  };

  return (
    <CardContainer>
      <Info>
        <ErrorCode>
          {errObject.cod}  
        </ErrorCode>
      <ErrorMessage>
        {errObject.message}
      </ErrorMessage>
    
      </Info>
        <ButtonsContainer>
         <Button name="Delete" onClick={onDel} />
      </ButtonsContainer> 
    </CardContainer>
  );
}

export default ErrorCard;
