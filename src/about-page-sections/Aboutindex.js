import React, { useEffect } from "react"
import Header from "../components/Header"
import MyStorySection from "./MyStorySection"
import MyExperienceSection from "./MyExperienceSection"
import SkillsSection from "./SkillsSection"
import Footer from "../components/Footer"
import {
  setTitleText,
  animateLines,
  buttonAnimation,
} from "../util-functions/componentAnimations"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ButtonComponent from "../components/ButtonComponent"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const Aboutindex = () => {
  useEffect(() => {
    setTitleText("about-title-text")
    setTitleText("about-end-title-text")
    animateLines("about-title-text")
    buttonAnimation()
  }, [])

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#about-end-title-text",
      start: "top 80%",
      onEnter: () => animateLines("about-end-title-text", "no-delay"),
      onLeave: () => {},
      onEnterBack: () => {},
      onLeaveBack: () => {},
    })
  }, [])
  const query = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about-1-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <div className="main-container main-container-add-top-padding">
        <div style={{ width: "100%" }}>
          <Header />
          <div className="h1-and-menu-space">
            <h1 style={{ marginTop: "5px" }} id="about-title-text">
              <span>A tech</span> <span>head who</span>
              <span>believes in</span> <span>blockchain.</span>{" "}
              <span>open for</span> <span>interesting</span> projects.
            </h1>
            <div className="buttons-container">
              <a
                href="https://github.com/Chanakya888"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="individual-button-container">
                  <ButtonComponent buttonId="github" buttonName="Github" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/kilaru-chanakya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="individual-button-container individual-button-2-container">
                  <ButtonComponent buttonId="linkedin" buttonName="LinkedIn" />
                </div>
              </a>
              <a
                href="https://drive.google.com/file/d/1xHuna_LmV3zPipA1VNQhk_CENAxKJBzq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="individual-button-container individual-button-2-container">
                  <ButtonComponent buttonId="resume" buttonName="View Resume" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-and-section-gap">
        <div className="cover-image-container">
          <Img
            fluid={query.image.childImageSharp.fluid}
            alt="about-cover"
            className="cover-image"
          />
        </div>
      </div>
      <div className="main-container  main-container-add-bottom-padding">
        <div>
          {/* Section one  */}
          <SkillsSection />
          {/* Section two */}
          <MyExperienceSection />
          {/* Section three */}
          <MyStorySection />
          {/* Section four */}

          <div className="section-gap">
            <h1 style={{ marginTop: "5px" }} id="end-title-text">
              I'm currently working as a frontend engineer at{" "}
              <a
                href="https://www.womp.xyz/"
                style={{ textDecoration: "underline", display: "inline" }}
                target="_blank"
              >
                WOMP.XYZ
              </a>
            </h1>
          </div>
          <div className="content-and-section-gap-2">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutindex
