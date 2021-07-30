import React, { useEffect } from "react"
import Header from "../components/Header"
import ButtonComponent from "../components/ButtonComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/Footer"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  setTitleText,
  animateLines,
  buttonAnimation,
} from "../util-functions/componentAnimations"
import InterlayWhatILearntSection from "./InterlayWhatILearnedOnSection"
import InterlayWhatIWorkedOnSection from "./InterlayWhatIWorkedOnSection"
import InterlayBackgroundSection from "./InterlayBackgroundSection"
const InterlayIndex = () => {
  useEffect(() => {
    setTitleText("interlay-title-text")
    animateLines("interlay-title-text")
    buttonAnimation()
    setTitleText("interlay-end-title-text")
  }, [])
  //   const query = useStaticQuery(graphql`
  //     query {
  //       euffImages: file(relativePath: { eq: "interlay-cover.png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 2000) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `)
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#interlay-end-title-text",
      start: "top 80%",
      onEnter: () => animateLines("interlay-end-title-text", "no-delay"),
      onLeave: () => {},
      onEnterBack: () => {},
      onLeaveBack: () => {},
    })
  }, [])
  return (
    <div>
      <div className="main-container main-container-add-top-padding">
        <div style={{ width: "100%" }}>
          <Header />
          <div className="h1-and-menu-space">
            <h1 style={{ marginTop: "5px" }} id="interlay-title-text">
              <span>My</span>
              <span>experience</span>
              <span>working for</span>
              <span>Interlay</span>
              <span>on interBTC</span>
            </h1>

            <div className="content-and-section-gap-2">
              <a
                href="https://beta.polkabtc.io/?tab=issue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonComponent buttonName="Visit the website" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-and-section-gap">
        <div className="cover-image-container">
          {/* <Img
            fluid={query.euffImages.childImageSharp.fluid}
            alt="interlay-cover"
            className="cover-image"
          /> */}
        </div>
      </div>
      <div className="main-container  main-container-add-bottom-padding">
        <div>
          {/* Section one */}
          <InterlayBackgroundSection />
          {/* Section two */}
          <InterlayWhatIWorkedOnSection />
          {/* Section three */}
          <InterlayWhatILearntSection />
          <div className="section-gap">
            <div id="interlay-credits-container">
              <h1
                style={{ marginTop: "5px" }}
                className="h1-width "
                id="interlay-end-title-text"
              >
                thanks to interlay for their trust and thanks to you for
                reading!
              </h1>
            </div>
          </div>
          <div className="content-and-section-gap-2">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterlayIndex
