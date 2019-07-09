import React from "react"
import Hammer from "hammerjs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FaceOff from "../components/faceOff/FaceOff"

const IndexPage = () => {
  // the element you want to attach to, probably a wrapper for the page
  var myElement = document.getElementById("FaceOff")
  // create a new hammer object, setting "touchAction" ensures the user can still scroll/pan
  var hammertime = new Hammer(myElement, {
    prevent_default: false,
    touchAction: "pan",
  })

  // pinch is not enabled by default in hammer
  hammertime.get("pinch").set({
    enable: true,
  })

  // name the events you want to capture, then call some function if you want and most importantly, add the preventDefault to block the normal pinch action
  hammertime.on("pinch pinchend pinchstart doubletap", function(e) {
    console.log("captured event:", e.type)
    e.preventDefault()
  })

  return (
    <Layout>
      <SEO title="Home" />
      <FaceOff id="FaceOff" />
    </Layout>
  )
}

export default IndexPage
