import Button from "components/Button/Button";
import {
  CardContainer,
  Info,
  ErrorCode,
  ErrorMessage,
  ButtonsContainer,
} from "./styles";

import { ErrorCardProps } from "./types";
import { useAppDispatch } from "store/hooks";
import { weatherActions } from "store/redux/weather/weatherSlice";

function ErrorCard({ errObject }: ErrorCardProps) {
  const dispatch = useAppDispatch();
  const onDel = () => {
    dispatch(weatherActions.deleteErrorCard());
    alert("Deleted successfully");
  };

  return (
    <CardContainer>
      <Info>
        <ErrorCode>{errObject.cod}</ErrorCode>
        <ErrorMessage>{errObject.message}</ErrorMessage>
      </Info>
      <ButtonsContainer>
        <Button name="Delete" variant="delete" onClick={onDel} />
      </ButtonsContainer>
    </CardContainer>
  );
}

export default ErrorCard;
