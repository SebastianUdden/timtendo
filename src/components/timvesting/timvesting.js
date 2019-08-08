import React from "react"
import styled from "styled-components"

const Timvesting = () => {
  return (
    <Wrapper>
      <Title>Timvesting</Title>
      <p>
        Bill: Turn to the game masters for more advice, timvesting is more than
        first meets the eye.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 1rem;
`
const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.5rem;
  color: green;
`

const Button = styled.button`
  margin: 0;
  background-color: ${p => p.color};
  color: white;
  padding: 0.2rem;
  width: 100%;
`

export default Timvesting
