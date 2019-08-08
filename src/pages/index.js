import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SuperTims from "../components/superTims/superTims"
import Timvesting from "../components/timvesting/timvesting"
import Tims from "../components/tims/Tims"
import FaulknersNotes from "../components/faulknersNotes/FaulknersNotes"
import { get } from "../utils/api"

const IndexPage = () => {
  const [tab, setTab] = useState(undefined)
  const [users, setUsers] = useState(undefined)
  const [tims, setTims] = useState(0)

  useEffect(() => {
    get(`${process.env.GATSBY_API_URL}/users`, "Unauthorized").then(users => {
      console.log("users: ", users)
      if (users.error) return
      setUsers(users)
      setTims(users && users[0].tims)
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      {!tab && users && users[0] && <Tims tims={tims} />}
      {tab === "faulknersNotes" && users && users[0] && <Tims tims={tims} />}
      {!tab && (
        <>
          <ButtonContainer>
            <Button color="green" onClick={() => setTab("timvesting")}>
              <H2>TIMVESTING</H2>
            </Button>
            <Button color="blue" onClick={() => setTab("superTimtendo")}>
              <H2>Super Timtendo</H2>
            </Button>
            <Button color="red" onClick={() => setTab("faulknersNotes")}>
              <H2>Faulkners notes</H2>
            </Button>
          </ButtonContainer>
        </>
      )}
      {tab === "timvesting" && <Timvesting setTab={setTab} />}
      {tab === "superTimtendo" && <SuperTims setTab={setTab} />}
      {tab === "faulknersNotes" && (
        <FaulknersNotes
          setTab={setTab}
          user={users[0]}
          tims={tims}
          setTims={setTims}
        />
      )}
    </Layout>
  )
}

const Button = styled.button`
  margin: 1rem 2rem;
  background-color: ${p => p.color};
  color: white;
  padding: 1rem 2rem;
  width: 80%;
`

const H2 = styled.h2`
  margin: 0;
  text-transform: uppercase;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default IndexPage
