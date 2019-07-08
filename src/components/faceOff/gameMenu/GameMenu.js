import React from "react"
import styled from "styled-components"

const GameMenu = ({
  p1Color,
  p2Color,
  playerNames,
  setPlayerNames,
  setGameActive,
  winners,
}) => {
  return (
    <Container>
      <Players>
        <Player
          playerColor={p1Color}
          onChange={e =>
            setPlayerNames({ p1: e.target.value, p2: playerNames.p2 })
          }
          value={playerNames.p1}
        />
        <Player
          playerColor={p2Color}
          onChange={e =>
            setPlayerNames({ p1: playerNames.p1, p2: e.target.value })
          }
          value={playerNames.p2}
        />
      </Players>
      <Button onClick={() => setGameActive(true)}>
        <H2>START DUEL</H2>
      </Button>

      <div>
        <H3>Victories</H3>
        <Winners>
          {winners && winners.map(winner => <Winner>{winner}</Winner>)}
        </Winners>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80vh;
`

const H2 = styled.h2`
  margin: 0;
  font-size: 4rem;
`

const H3 = styled.h3`
  margin: 0 0 1rem;
  font-size: 2rem;
  text-align: center;
`

const Button = styled.button`
  background-color: green;
  color: white;
  padding: 0.5rem;
  width: 100%;
`

const Players = styled.div`
  display: flex;
  justify-content: space-between;
`
const Player = styled.input`
  text-transform: uppercase;
  width: 45%;
  padding: 0.5rem;
  background-color: inherit;
  color: ${p => p.playerColor};
  border: none;
  border-bottom: 1px solid ${p => p.playerColor};
  outline: none;
`

const Winners = styled.ul`
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Winner = styled.li``

export default GameMenu
