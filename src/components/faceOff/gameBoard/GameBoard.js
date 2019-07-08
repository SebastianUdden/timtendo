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

const GameBoard = ({
  p1Direction,
  p2Direction,
  p1Color,
  p2Color,
  setGameActive,
  winners,
  setWinners,
  playerNames,
}) => {
  const [p1, setP1] = useState({ x: 0, y: -1 })
  const [p2, setP2] = useState({ x: 8, y: 9 })
  const [killMove, setKillMove] = useState(undefined)
  const [p1Stop, setP1Stop] = useState(undefined)
  const [p2Stop, setP2Stop] = useState(undefined)

  useEffect(() => {
    setP1(changePosition(p1Direction, p1, p1Stop))
  }, [p1Direction])

  useEffect(() => {
    setP2(changePosition(p2Direction, p2, p2Stop))
  }, [p2Direction])

  useEffect(() => {
    // From above
    if (p1.x === p2.x && p1.y === p2.y - 1 && p1Direction.startsWith("down")) {
      setKillMove("p1")
    }
    if (p2.x === p1.x && p2.y === p1.y - 1 && p2Direction.startsWith("down")) {
      setKillMove("p2")
    }

    // From below
    if (p1.x === p2.x && p1.y === p2.y + 1 && p1Direction.startsWith("up")) {
      setKillMove("p1")
    }
    if (p2.x === p1.x && p2.y === p1.y + 1 && p2Direction.startsWith("up")) {
      setKillMove("p2")
    }

    // From left
    if (p1.x === p2.x - 1 && p1.y === p2.y && p1Direction.startsWith("right")) {
      setKillMove("p1")
    }
    if (p2.x === p1.x - 1 && p2.y === p1.y && p2Direction.startsWith("right")) {
      setKillMove("p2")
    }

    // From left
    if (p1.x === p2.x + 1 && p1.y === p2.y && p1Direction.startsWith("left")) {
      setKillMove("p1")
    }
    if (p2.x === p1.x + 1 && p2.y === p1.y && p2Direction.startsWith("left")) {
      setKillMove("p2")
    }

    // Neutralise y and x
    if (
      p1.x === p2.x &&
      p1.y === p2.y - 1 &&
      p1Direction.startsWith("down") &&
      p2Direction.startsWith("up")
    ) {
      setP1Stop("down")
      setP2Stop("up")
    } else if (
      p2.x === p1.x &&
      p2.y === p1.y - 1 &&
      p1Direction.startsWith("up") &&
      p2Direction.startsWith("down")
    ) {
      setP1Stop("up")
      setP2Stop("down")
    } else if (
      p1.x === p2.x - 1 &&
      p1.y === p2.y &&
      p1Direction.startsWith("right") &&
      p2Direction.startsWith("left")
    ) {
      setP1Stop("right")
      setP2Stop("left")
    } else if (
      p2.x === p1.x - 1 &&
      p2.y === p1.y &&
      p1Direction.startsWith("left") &&
      p2Direction.startsWith("right")
    ) {
      setP1Stop("left")
      setP2Stop("right")
    } else {
      setP1Stop(undefined)
      setP2Stop(undefined)
    }

    if (p1.x === p2.x && p1.y === p2.y && killMove) {
      setP1({ x: 0, y: 0 })
      setP2({ x: 8, y: 8 })
      setGameActive(false)
      setWinners([...winners, playerNames[killMove]])
    }
  }, [p1, p2])

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
                playerColor={p1.y === index && p1.x === i ? p1Color : p2Color}
                playerOne={p1.y === index && p1.x === i}
                playerTwo={p2.y === index && p2.x === i}
                playerDirection={
                  p1.y === index && p1.x === i
                    ? p1Direction
                    : p2.y === index && p2.x === i
                    ? p2Direction
                    : undefined
                }
              >
                {p1.y === index && p1.x === i ? (
                  <Icon src={redTims} alt="1" />
                ) : p2.y === index && p2.x === i ? (
                  <Icon src={blueTims} alt="2" />
                ) : (
                  <></>
                )}
              </Cell>
            ))}
          </Row>
        ))}
      </Board>
      {playerNames && (
        <PlayerTwo playerColor={p2Color}>{playerNames.p2}</PlayerTwo>
      )}
    </>
  )
}

const Board = styled.div`
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
  height: 2rem;
`

const Icon = styled.img`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
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
const PlayerTwo = styled(PlayerHeading)`
  margin-bottom: 0.2rem;
  color: ${p => p.playerColor};
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

export default GameBoard
