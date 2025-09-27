import styled from "@emotion/styled"

export const CreateWeatherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: black;
`

export const CreateWeatherContainer = styled.form`
  display: flex;
  flex-direction: row;
  width: 710px;
  min-height: 48px;
  max-height: fit-content;
  padding: 60px;
  border-radius: 50px;
  background-color: transparent;
  border: 1px solid black;
  gap: 30px;
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 0, 0, 1);
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
