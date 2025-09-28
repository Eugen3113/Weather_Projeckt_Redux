import styled from "@emotion/styled";

export const CreateWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  color: black;
  gap: 100px;
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
  flex-direction: row;
  gap: 20px;
`;
