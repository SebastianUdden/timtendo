import React, { useState, useEffect } from "react"
import Controller from "../controller/Controller"
import TimsBoard from "./timsBoard/TimsBoard"
import TimsCounter from "./timsCounter/TimsCounter"

const COUNTDOWN_SECONDS = 60

const SuperTims = () => {
  const [timing, setTiming] = useState(true)
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS)
  const [tims, setTims] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [displayWinner, setDisplayWinner] = useState(undefined)
  const [winners, setWinners] = useState([])
  const [playerNames, setPlayerNames] = useState({
    p2: "Player 1",
  })
  const [p1Direction, setP1Direction] = useState("down")

  useEffect(() => {
    let interval
    if (timing) {
      interval = setInterval(() => {
        setCountdown(preSecond => {
          if (preSecond <= 1) {
            setTiming(false)
            clearInterval(interval)
            return 0
          } else {
            return preSecond - 1
          }
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timing])

  return (
    <>
      <TimsCounter tims={tims} countdown={countdown} />
      {countdown !== 0 && (
        <>
          <TimsBoard
            p1Direction={p1Direction}
            p1Color={"#dd3333"}
            setGameActive={setGameActive}
            setWinners={setWinners}
            winners={winners}
            setTims={setTims}
            tims={tims}
          />
          <br />
          <Controller
            player={1}
            playerColor="#ff3333"
            direction={p1Direction}
            setDirection={setP1Direction}
          />
        </>
      )}
    </>
  )
}

export default SuperTims
