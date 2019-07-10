import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Controller from "../controller/Controller"
import TimsBoard from "./timsBoard/TimsBoard"
import TimsCounter from "./timsCounter/TimsCounter"
import blueTims from "../../images/tims-blue.png"

const COUNTDOWN_SECONDS = 15

const SuperTims = () => {
  const [timing, setTiming] = useState(true)
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS)
  const [tims, setTims] = useState(0)
  const [collectedList, setCollectedList] = useState([])
  const [gameActive, setGameActive] = useState(true)
  // const [displayWinner, setDisplayWinner] = useState(undefined)
  // const [playerNames, setPlayerNames] = useState({
  //   p2: "Player 1",
  // })
  const [p1Direction, setP1Direction] = useState("down")
  useEffect(() => {
    if (countdown === 0) {
      setGameActive(false)
      setCollectedList([...collectedList, tims].sort((a, b) => b - a))
    }
  }, [countdown])

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
      <TimsCounter gameActive={gameActive} tims={tims} countdown={countdown} />
      {!gameActive && (
        <>
          <HighScore>
            <H3>
              <Score>High Sc</Score>
              <MidIcon src={blueTims} />
              <Score>re</Score>
            </H3>
            <CollectedList>
              {collectedList &&
                collectedList.map(c => (
                  <Collected>
                    <Count>{c}</Count>
                    <SmallIcon src={blueTims} />
                  </Collected>
                ))}
            </CollectedList>
          </HighScore>
          <Button
            onClick={() => {
              setTims(0)
              setCountdown(COUNTDOWN_SECONDS)
              setGameActive(true)
              setTiming(!timing)
            }}
          >
            <H2>PLAY AGAIN</H2>
          </Button>
        </>
      )}
      {gameActive && (
        <>
          <TimsBoard
            p1Direction={p1Direction}
            p1Color={"#dd3333"}
            setGameActive={setGameActive}
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

const HighScore = styled.div`
  padding-top: 0.5rem;
  border: 3px solid #777;
  background-color: #444;
  color: #eee;
`

const H3 = styled.h3`
  margin: 0 0 1rem;
  font-size: 2rem;
  text-align: center;
`
const Score = styled.span`
  z-index: 298;
  position: relative;
`

const CollectedList = styled.ul`
  text-align: center;
  list-style-type: none;
  margin: 0 0 1rem;
  padding: 0;
`

const Collected = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  margin-bottom: 0.2rem;
  color: #777;
`

const Count = styled.h4`
  font-size: 1.5rem;
  display: inline;
  margin: 0;
  padding: 0;
`

const Icon = styled.img`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 1rem;
  ${p =>
    p.killMove &&
    `
    border-bottom: 0.8rem dotted #ee3333;
    `}
`

const MidIcon = styled(Icon)`
  position: relative;
  z-index: 1;
  height: 1.5rem;
  width: 1.5rem;
  margin: -0.1rem -0.3rem;
`

const SmallIcon = styled(Icon)`
  padding-bottom: 0.2rem;
`

const H2 = styled.h2`
  margin: 0;
  font-size: 3rem;
`

const Button = styled.button`
  margin: 0;
  background-color: green;
  color: white;
  padding: 0.5rem;
  width: 100%;
`

export default SuperTims
