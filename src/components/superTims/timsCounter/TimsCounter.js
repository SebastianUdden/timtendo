import React from "react"
import styled from "styled-components"
import blueTims from "../../../images/tims-blue.png"

const TimsCounter = ({ countdown, tims }) => {
  return (
    <Container>
      {countdown !== 0 && <H3>{countdown}</H3>}
      <H2>
        {tims}
        <Icon src={blueTims} alt="2" />
      </H2>
    </Container>
  )
}

const Container = styled.div`
  background-color: #444;
  border: 3px solid #777;
`

const H2 = styled.h2`
  font-size: 6rem;
  color: #666;
  margin: 1rem;
  text-align: center;
`

const H3 = styled.h3`
  color: #e33;
  font-size: 2rem;
  margin: 1rem;
  text-align: center;
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
