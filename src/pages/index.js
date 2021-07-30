import React, { useEffect } from "react"
import renderNoise from "../util-functions/renderNoise"
import "../styles/reset.css"
import "../styles/global.css"
import "../styles/App.css"
import IndexSection from "../home-page-sections/IndexSection"
import { TimelineLite } from "gsap"

export default function Home() {
  useEffect(() => {
    renderNoise()
  }, [])
  useEffect(() => {
    openingAnimation()
  }, [])
  const openingAnimation = () => {
    let t1 = new TimelineLite()
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden"
    setTimeout(function () {
      document.getElementsByTagName("BODY")[0].style.overflow = "scroll"
    }, 4000)
    t1.fromTo(
      document.getElementsByClassName("opening-rectangle"),
      { width: "0vw" },
      { width: "100vw", ease: "Power4.easeOut", duration: 1 }
    )
    t1.add(function () {
      document
        .getElementsByClassName("opening-rectangle")[0]
        .classList.add("change-opening-side")
    })

    t1.to(document.getElementsByClassName("opening-rectangle"), {
      delay: 0.5,
      width: "0vw",
      ease: "Power4.easeOut",
      duration: 1,
    })
  }
  return (
    <div style={{ position: "relative" }}>
      <div className="opening-rectangle" />
      <canvas id="noise" className="noise" />
      <div className="components-foreground">
        <IndexSection />
        {/* <PageNavigation section1="Hey1home" section2="Projects1home" section3="About1home" section4="Status1home" nextProject="none" /> */}
      </div>
    </div>
  )
}
