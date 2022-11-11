import React, { ChangeEvent } from "react";
import { Container, Input } from "./styles";

type TimerPros = {
  time: string,
  name: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Timer = ({ time, name, onChange, ...rest }: TimerPros) => {
  return (
    <Container>
      <Input {...rest} name={name} type="text" value={time} onChange={onChange} />
    </Container>
  )
}