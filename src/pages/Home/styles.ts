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
  gap: 30px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #ff0000ff;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
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
  backdrop-filter: blur(4px);
`;

export const TempCityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 19px;
  height: 97px;
=======
  height: 50px;
>>>>>>> bb293952789c76e37638c5e17b22b85835999c7e
  width: 100%;
  max-width: 709px;
  min-width: fit-content;
  padding: 16px;
`;

export const LoadingMessage = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: white;
`;
