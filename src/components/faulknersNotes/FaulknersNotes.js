import React, { useState } from "react"
import styled from "styled-components"
import { update } from "../../utils/api"

const FaulknersNotes = ({ user, tims, setTims }) => {
  //   const priviliged = prompt("The professors password")
  const priviliged = "x"

  const increaseTims = amount => {
    setTims(tims + amount)
  }

  const updateTims = () => {
    update(
      `${process.env.GATSBY_API_URL}/users/${user._id}`,
      {
        ...user,
        tims,
      },
      user.username
    ).then(response => {
      console.log("response: ", response)
      document.location.reload()
    })
  }

  return (
    <Wrapper>
      {priviliged !== "x" && <Title>No access</Title>}
      {priviliged === "x" && (
        <>
          <Title>God mode engaged</Title>
          <Button color="green" onClick={() => increaseTims(50000)}>
            {`+ 50 000 (+${Math.floor((50000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="green" onClick={() => increaseTims(20000)}>
            {`+ 20 000 (+${Math.floor((20000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="green" onClick={() => increaseTims(10000)}>
            {`+ 10 000 (+${Math.floor((10000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="green" onClick={() => increaseTims(5000)}>
            {`+ 5 000 (+${Math.floor((5000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="green" onClick={() => increaseTims(2000)}>
            {`+ 2 000 (+${Math.floor((2000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="green" onClick={() => increaseTims(1000)}>
            {`+ 1 000 (+${Math.floor((1000 / tims) * 1000) / 10}%)`}
          </Button>

          <Button color="red" onClick={() => increaseTims(-1000)}>
            {`- 1 000 (-${Math.floor((1000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="red" onClick={() => increaseTims(-2000)}>
            {`- 2 000 (-${Math.floor((2000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="red" onClick={() => increaseTims(-5000)}>
            {`- 5 000 (-${Math.floor((5000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="red" onClick={() => increaseTims(-10000)}>
            {`- 10 000 (-${Math.floor((10000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="red" onClick={() => increaseTims(-20000)}>
            {`- 20 000 (-${Math.floor((20000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color="red" onClick={() => increaseTims(-50000)}>
            {`- 50 000 (-${Math.floor((50000 / tims) * 1000) / 10}%)`}
          </Button>
          <Button color={"#444"} onClick={() => updateTims()}>
            SAVE ({user.tims} -> {tims}:{" "}
            {Math.floor((-(user.tims - tims) / tims) * 1000) / 10}%)
          </Button>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 1rem;
`
const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.5rem;
  color: red;
`

const Button = styled.button`
  margin: 0;
  background-color: ${p => p.color};
  color: white;
  padding: 0.2rem;
  width: 100%;
`

export default FaulknersNotes
