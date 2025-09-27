import styled from "@emotion/styled";

export const InputComponent = styled.input`
  width: 550px;
  height: 48px;
  border: 1px solid white;
  border-radius: 40px;
  padding: 12px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.4);
  color: #fff;
  font-size: 20px;
  &::placeholder {
    color: #6f6f6f;
    font-size: 20px;
  }
`;
