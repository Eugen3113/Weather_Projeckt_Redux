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

export const Card = styled.div`
  display: flex;
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
