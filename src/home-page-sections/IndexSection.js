import React, { useEffect } from "react"
import "../styles/home.css"
import Header from "../components/Header"
import FeaturedProjects from "../home-page-sections/FeaturedProjects"
import HomeAboutMe from "../home-page-sections/HomeAboutMe"
import Footer from "../components/Footer"
import {
  setTitleText,
  animateLines,
} from "../util-functions/componentAnimations"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"
gsap.registerPlugin(ScrollTrigger)
function Home() {
  useEffect(() => {
    setTitleText("title-text")
    setTitleText("end-title-text")
    animateLines("title-text", "opening-animation")
  }, [])

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#end-title-text",
      start: "top 80%",
      onEnter: () => animateLines("end-title-text", "no-delay"),
      onLeave: () => {},
      onEnterBack: () => {},
      onLeaveBack: () => {},
    })
  }, [])
  return (
    <div className="main-container main-container-add-top-padding main-container-add-bottom-padding">
      <div>
        <Header delay="opening" />
        <section id="Hey1home">
          <div className="h1-and-menu-space">
            <h1 style={{ marginTop: "5px" }} id="title-text">
              hey I'm Chanakya. a frontend developer with focus on UI/UX design.
            </h1>
          </div>
        </section>
        <div className="section-gap">
          <HomeAboutMe />
        </div>
        <div className="section-gap">
          <FeaturedProjects />
        </div>

        <section id="Status1home">
          <div className="section-gap">
            <h1 style={{ marginTop: "5px" }}>
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
        </section>
        <div className="content-and-section-gap-2">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
