import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FaceOff from "../components/faceOff/FaceOff"
import SuperTims from "../components/superTims/superTims"

const IndexPage = () => {
  const [tab, setTab] = useState(undefined)
  return (
    <Layout>
      <SEO title="Home" />
      {!tab && (
        <ButtonContainer>
          <Button onClick={() => setTab("faceOff")}>
            <H2>Face Off</H2>
          </Button>
          <Button onClick={() => setTab("superTims")}>
            <H2>Super Tims</H2>
          </Button>
        </ButtonContainer>
      )}
      {tab === "faceOff" && <FaceOff setTab={setTab} />}
      {tab === "superTims" && <SuperTims setTab={setTab} />}
    </Layout>
  )
}

const Button = styled.button`
  margin: 1rem 2rem;
  background-color: green;
  color: white;
  padding: 1rem 2rem;
  width: 80%;
`

const H2 = styled.h2`
  margin: 0;
  text-transform: uppercase;
`

const ButtonContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default IndexPage
