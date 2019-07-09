import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FaceOff from "../components/faceOff/FaceOff"

const IndexPage = () => {
  document.addEventListener(
    "touchmove",
    function(event) {
      if (event.scale !== 1) {
        event.preventDefault()
      }
    },
    false
  )

  return (
    <Layout>
      <SEO title="Home" />
      <FaceOff />
    </Layout>
  )
}

export default IndexPage
