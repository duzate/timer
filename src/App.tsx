import { ChangeEvent, useState } from 'react'
import { BtnStart } from './components/Button/styles';
import { Timer } from './components/Timer';
import { Container, Counter } from './styles';

//const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 1 * 60 // 25 min

const App = () => {
  const [secondsAmount, setSecondsAmount] = useState(0);
  const [state, setState] = useState(0)
  const [status, setStatus] = useState(0)
  

  const run = () => {
    secondsAmount > 0 
      ? setSecondsAmount(state => state - 1)
      :reset() 
      
  }

  const start = () => {
    run()
    setState(setInterval(run, 1000))
    setStatus(1)
  }

  const stop = () => {
    clearInterval(state)
    setStatus(2)
  }

  const resume = () => {
    start()
  }

  const reset = () => {
    clearInterval(state)
    setSecondsAmount(0)
    setStatus(0)
  }

  const hours = String(Math.floor(secondsAmount / 3600) % 24).padStart(2, '0');
  const minutes = String(Math.floor(secondsAmount / 60) % 60).padStart(2, '0');
  const seconds = String(secondsAmount % 60).padStart(2, '0');
  
  console.log(secondsAmount);

  return (
    <Container>
      <Counter>
        <Timer time={hours} name='hours' onChange={(e: ChangeEvent<HTMLInputElement>) => setSecondsAmount(Number(e.target.value.replace(/\D/g, '')) * 3600)} />
        <div>:</div>
        <Timer time={minutes} name='minutes' onChange={(e: ChangeEvent<HTMLInputElement>) => setSecondsAmount(Number(e.target.value.replace(/\D/g, '')) * 60)} />
        <div>:</div>
        <Timer time={seconds} name='seconds' onChange={(e: ChangeEvent<HTMLInputElement>) => setSecondsAmount(Number(e.target.value.replace(/\D/g, '')))} />
      </Counter>
      {
        status === 0 ?
          <>
            <BtnStart color='rgb(100, 250, 160)' onClick={start}>START</BtnStart>
            <BtnStart style={{ visibility: 'hidden' }}>START</BtnStart>
          </>
          : status === 1 ?
            <>
              <BtnStart color='rgb(255, 43, 43)' onClick={stop}>STOP</BtnStart>
              <BtnStart color='rgb(250, 255, 70)' onClick={reset}>RESET</BtnStart>
            </>
            : status === 2 ?
              <>
                <BtnStart color='rgb(140, 250, 255)' onClick={resume}>RESUME</BtnStart>
                <BtnStart color='rgb(250, 255, 70)' onClick={reset}>RESET</BtnStart>
              </>
              : ''
      }
    </Container>
  )
}

export default App
