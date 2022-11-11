import React from "react";
import { BtnStart } from "./styles";

type BtnProps = {
  color?: string,
  onClick: () => void
}

export const Button = ({color, ...rest}: BtnProps) => {
  return(
    <BtnStart color='rgb(100, 250, 160)' {...rest} >START</BtnStart>
  )
}