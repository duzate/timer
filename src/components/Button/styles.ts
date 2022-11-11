import styled from "styled-components";

type Props = {
  color?: string
}

export const BtnStart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 215px;
  height: 40px;
  margin-top: 20px;

  border: none;
  border-radius: 4px;
  background-color: ${({color}: Props) => color};
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;

  cursor: pointer;
`
