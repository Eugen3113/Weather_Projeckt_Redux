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
  background: linear-gradient(133.66deg, #2f486f9e 5.78%, #0b1b349e 96.58%);
  backdrop-filter: blur(8px);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 95px;
  position: relative;
  z-index: 2;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 129px;
  width: 100%;
  max-width: 709px;
  min-width: fit-content;
`;

export const ErrorCode = styled.div`
  font-size: 57px;
  font-weight: 500;
  color: rgba(243, 94, 94, 1);
`;

export const ErrorMessage = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
`;
