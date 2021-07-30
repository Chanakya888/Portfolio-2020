import React, { useEffect } from "react"
import renderNoise from "../util-functions/renderNoise"
import PageNavigation from "../components/PageNavigation"
import InterlayIndex from "../interlay-page-sections/InterlayIndex"
const Interlay = () => {
  useEffect(() => {
    renderNoise()
  }, [])
  return (
    <div>
      <canvas id="noise" className="noise" />
      <div className="components-foreground">
        <InterlayIndex />
        <PageNavigation
          section1="Background1Interlay"
          section2="Work1Interlay"
          section3="Learnings1Interlay"
          section4="none"
          nextProject="/kyc"
          creditsId="Interlay-credits-container"
        />
      </div>
    </div>
  )
}

export default Interlay
