import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 95px;
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
  padding: 16px;
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

