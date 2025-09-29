import styled from "@emotion/styled";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: black;
  justify-content: center;
  align-items: center;
`;

export const ButtonControl = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & > button {
    width: 700px;
    background-color: #3678b4;
    border: 1px solid #3678b4;
  }
`;
