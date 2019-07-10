import React, { useState, useEffect } from "react"
import styled from "styled-components"
import redTims from "../../../images/tims-red.png"
import blueTims from "../../../images/tims-blue.png"

const board = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9"],
  ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9"],
  ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9"],
  ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9"],
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"],
  ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9"],
]

const changePosition = (direction, position, pStop) => {
  switch (direction) {
    case "up":
    case "up2":
      return !direction.startsWith(pStop)
        ? { x: position.x, y: position.y === 0 ? 0 : position.y - 1 }
        : position
    case "down":
    case "down2":
      return !direction.startsWith(pStop)
        ? { x: position.x, y: position.y === 8 ? 8 : position.y + 1 }
        : position
    case "left":
    case "left2":
      return !direction.startsWith(pStop)
        ? { x: position.x === 0 ? 0 : position.x - 1, y: position.y }
        : position
    case "right":
    case "right2":
      return !direction.startsWith(pStop)
        ? { x: position.x === 8 ? 8 : position.x + 1, y: position.y }
        : position
    default:
      return position
  }
}

const TimsBoard = ({
  p1Direction,
  p1Color,
  setGameActive,
  playerNames,
  setTims,
  tims,
}) => {
  const x = Math.floor(Math.random() * 10 - 1)
  const y = Math.floor(Math.random() * 10 - 1)
  const [timsPosition, setTimsPosition] = useState({
    x: x < 0 ? 0 : x,
    y: y < 0 ? 0 : y,
  })
  const [p1, setP1] = useState({ x: 0, y: -1 })
  const [p1Stop, setP1Stop] = useState(undefined)

  useEffect(() => {
    setP1(changePosition(p1Direction, p1, p1Stop))
  }, [p1Direction])

  useEffect(() => {
    if (p1.x === timsPosition.x && p1.y === timsPosition.y) {
      const x = Math.floor(Math.random() * 10 - 1)
      const y = Math.floor(Math.random() * 10 - 1)
      setTimsPosition({
        x: x < 0 ? 0 : x,
        y: y < 0 ? 0 : y,
      })
      setTims(tims + 1)
    }
  }, [p1, timsPosition])

  return (
    <>
      {playerNames && (
        <PlayerOne playerColor={p1Color}>{playerNames.p1}</PlayerOne>
      )}
      <Board>
        {board.map((row, index) => (
          <Row>
            {row.map((cell, i) => (
              <Cell
                playerColor={p1Color}
                playerOne={p1.y === index && p1.x === i}
                playerDirection={
                  p1.y === index && p1.x === i ? p1Direction : undefined
                }
              >
                {p1.y === index && p1.x === i ? (
                  <Icon src={redTims} alt="1" />
                ) : timsPosition.y === index && timsPosition.x === i ? (
                  <Icon src={blueTims} alt="2" />
                ) : (
                  <></>
                )}
              </Cell>
            ))}
          </Row>
        ))}
      </Board>
    </>
  )
}

const Board = styled.div`
  touch-action: none;
  margin: 0;
  border: 3px solid #777;
  background-color: #444;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
`

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px dashed #666;
  background-color: #444;
  padding: 0;
  transform: ${p =>
    p.playerOne || p.playerTwo
      ? `rotate(${getRotation(p.playerDirection)}deg)`
      : ""};
  width: 100%;
  height: 1.8rem;
`

const Icon = styled.img`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  ${p =>
    p.killMove &&
    `
    border-bottom: 0.8rem dotted #ee3333;
  `}
`

const PlayerHeading = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
`

const PlayerOne = styled(PlayerHeading)`
  color: ${p => p.playerColor};
  margin-top: 0.2rem;
  transform: rotate(180deg);
`

const getRotation = direction => {
  if (direction.startsWith("up")) {
    return 180
  }
  if (direction.startsWith("right")) {
    return 270
  }
  if (direction.startsWith("down")) {
    return 0
  }
  if (direction.startsWith("left")) {
    return 90
  }
}

export default TimsBoard
