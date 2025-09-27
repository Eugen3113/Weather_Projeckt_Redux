import styled from "@emotion/styled";

export const CreateWeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  color: black;
`;

export const CreateWeatherContainer = styled.form`
  display: flex;
  flex-direction: row;
  width: 710px;
  min-height: 48px;
  max-height: fit-content;
  background-color: transparent;
  gap: 30px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 0, 0, 1);
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  align-items: center;
  width: 709px;
  height: 220px;
  padding: 27px 36px;
  border-radius: 15px;
  /* background-color: rgba(18, 45, 77, 0.5); */
  gap: 30px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(8px);
`;

export const TempCityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 19px;
  height: 97px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 95px;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  max-width: 250px;
  min-width: fit-content;
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TempContainer = styled.div`
  font-size: 57px;
  font-weight: 500;
  color: white;
`;

export const CityContainer = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
`;

export const IconContainer = styled.img`
  height: 100%;
`;
