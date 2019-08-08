import React from "react"
import styled from "styled-components"

const Tims = ({ tims }) => {
  return (
    <Wrapper>
      <Amount color={(tims >= 0 && "green") || "red"}>
        {Math.floor(tims).toLocaleString()}
      </Amount>
      <Currency>TIMS</Currency>
    </Wrapper>
  )
}

const Amount = styled.span`
  color: ${p => p.color};
  font-size: 3.5rem;
`
const Currency = styled.span`
  color: white;
  margin-left: 0.3rem;
  margin-top: 0.5rem;
  font-size: 1.6rem;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
`

export default Tims
