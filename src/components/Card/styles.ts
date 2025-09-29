import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 709px;
  height: 220px;
  padding: 27px 36px;
  border-radius: 25px;
  gap: 30px;
  background: linear-gradient(
    133.66deg,
    #2f486f9e 5.78%,
    #0b1b349e 96.58%
  );
  backdrop-filter: blur(8px);
`;

export const TempCityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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
  position: absolute;
  left: 40%;
  height: 100%;
`;

export const TempContainer = styled.div`
  font-size: 57px;
  font-weight: 500px;
  color: white;
`;

export const CityContainer = styled.div`
  font-size: 20px;
  color: white;
`;

export const IconContainer = styled.img`
  height: 100px;
`;
