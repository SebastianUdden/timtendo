import React from "react"
import styled from "styled-components"
import redTims from "../../../images/tims-red.png"
import blueTims from "../../../images/tims-blue.png"

const Controller = ({ player, direction, setDirection }) => {
  return (
    <Container>
      <Arrow
        player={player}
        onClick={() => setDirection(direction === "left" ? "left2" : "left")}
      >
        <Icon
          rotate={90}
          src={player === 1 ? redTims : blueTims}
          alt={player}
        />
      </Arrow>
      <Mid>
        <Arrow
          mid
          player={player}
          onClick={() => setDirection(direction === "up" ? "up2" : "up")}
        >
          <Icon
            rotate={180}
            src={player === 1 ? redTims : blueTims}
            alt={player}
          />
        </Arrow>
        <Arrow
          mid
          player={player}
          onClick={() => setDirection(direction === "down" ? "down2" : "down")}
        >
          <Icon
            rotate={0}
            src={player === 1 ? redTims : blueTims}
            alt={player}
          />
        </Arrow>
      </Mid>
      <Arrow
        player={player}
        onClick={() => setDirection(direction === "right" ? "right2" : "right")}
      >
        <Icon
          rotate={270}
          src={player === 1 ? redTims : blueTims}
          alt={player}
        />
      </Arrow>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 17vh;
  justify-content: stretch;
  background-color: red;
`

const Mid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  height: 10vh;
  width: 100%;
`

const Arrow = styled.button`
  color: #444;
  background-color: #444;
  border: 1px solid #222;
  min-height: ${p => (p.mid ? "50" : "100")}%;
  width: 100%;
  height: 100%;
  background-color: ${p => p.player};
  touch-action: manipulation;
`

const Icon = styled.img`
  height: 100%;
  width: 100%;
  max-height: 7rem;
  max-width: 5rem;
  margin: 0;
  padding: 0;
  transform: ${p => `rotate(${p.rotate}deg)`};
`

export default Controller
