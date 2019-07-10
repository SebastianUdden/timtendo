import React from "react"
import styled from "styled-components"
import blueTims from "../../../images/tims-blue.png"

const TimsCounter = ({ countdown, tims }) => {
  return (
    <Container>
      {countdown !== 0 ? (
        <H2>
          <Countdown>{countdown}</Countdown>
        </H2>
      ) : (
        <Final>Collected</Final>
      )}
      <H2>
        <Tims>
          {tims}
          <Icon src={blueTims} alt="2" />
        </Tims>
      </H2>
    </Container>
  )
}

const Container = styled.div`
  background-color: #444;
  border: 3px solid #777;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const H2 = styled.h2`
  font-size: 6rem;
  color: #666;
  margin: 0 0 0.4rem;
  text-align: center;
`

const Countdown = styled.div`
  color: #e33;
`

const Tims = styled.div``
const Final = styled.h3`
  margin: 0;
  color: #777;
  font-size: 1.5rem;
`

const Icon = styled.img`
  height: 100%;
  width: 3rem;
  margin: 0;
  padding: 0;
  ${p =>
    p.killMove &&
    `
    border-bottom: 0.8rem dotted #ee3333;
  `}
`

export default TimsCounter
