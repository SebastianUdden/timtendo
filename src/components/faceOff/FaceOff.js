import React, { useState, useEffect } from "react"
import styled from "styled-components"
import GameBoard from "./gameBoard/GameBoard"
import Controller from "./controller/Controller"
import GameMenu from "./gameMenu/GameMenu"

const FaceOff = () => {
  const [gameActive, setGameActive] = useState(false)
  const [displayWinner, setDisplayWinner] = useState(undefined)
  const [winners, setWinners] = useState([])
  const [playerNames, setPlayerNames] = useState({
    p1: "Player 1",
    p2: "Player 2",
  })
  const [p1Direction, setP1Direction] = useState("down")
  const [p2Direction, setP2Direction] = useState("up")

  useEffect(() => {
    const doubleTouchStartTimestamp = 0
    document.addEventListener("touchstart", event => {
      let now = +new Date()
      if (doubleTouchStartTimestamp + 500 > now) {
        event.preventDefault()
      }
      doubleTouchStartTimestamp = now
    })
    setDisplayWinner(winners[winners.length - 1])
    setTimeout(() => {
      setDisplayWinner(undefined)
    }, 3000)
  }, [gameActive])

  return (
    <Wrapper>
      {gameActive && (
        <>
          <Controller
            player={1}
            playerColor="#ff3333"
            direction={p1Direction}
            setDirection={setP1Direction}
          />
          <GameBoard
            p1Direction={p1Direction}
            p2Direction={p2Direction}
            p1Color={"#dd3333"}
            p2Color={"#3366dd"}
            setGameActive={setGameActive}
            setWinners={setWinners}
            winners={winners}
            playerNames={playerNames}
          />
          <Controller
            player={2}
            playerColor="#3333ff"
            direction={p2Direction}
            setDirection={setP2Direction}
          />
        </>
      )}
      {!gameActive && !displayWinner && (
        <>
          <GameMenu
            p1Color={"#dd3333"}
            p2Color={"#3366dd"}
            playerNames={playerNames}
            setPlayerNames={setPlayerNames}
            setGameActive={setGameActive}
            winners={winners}
          />
        </>
      )}
      {!gameActive && displayWinner && (
        <>
          <H2
            playerColor={
              displayWinner === playerNames.p1 ? "#ff3333" : "#3333ff"
            }
          >
            {displayWinner} WINS
            {winners[winners.length - 2] === displayWinner ? " AGAIN!" : "!"}
          </H2>
        </>
      )}
    </Wrapper>
  )
}

const H2 = styled.h2`
  touch-action: none;
  text-align: center;
  font-size: 6rem;
  color: ${p => p.playerColor};
`

const Wrapper = styled.div`
  touch-action: none;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export default FaceOff
