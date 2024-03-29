import React, { useEffect } from "react"
import { SplitText } from "../util-functions/SplitText"
import gsap from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const FeaturedProjects = () => {
  useEffect(() => {
    new SplitText("#csp-left-subtitle", {
      type: "chars",
      charsClass: "csp-chars",
    })
    new SplitText("#csp-right-subtitle", {
      type: "chars",
      charsClass: "csp-chars",
    })
    new SplitText("#jjn-left-subtitle", {
      type: "chars",
      charsClass: "jjn-chars",
    })
    new SplitText("#jjn-right-subtitle", {
      type: "chars",
      charsClass: "jjn-chars",
    })
    new SplitText("#euff-left-subtitle", {
      type: "chars",
      charsClass: "euff-chars",
    })
    new SplitText("#euff-right-subtitle", {
      type: "chars",
      charsClass: "euff-chars",
    })
    new SplitText("#tsundoku-left-subtitle", {
      type: "chars",
      charsClass: "tsundoku-chars",
    })
    new SplitText("#tsundoku-right-subtitle", {
      type: "chars",
      charsClass: "tsundoku-chars",
    })
    new SplitText("#interlay-right-subtitle", {
      type: "chars",
      charsClass: "interlay-chars",
    })
    new SplitText("#interlay-left-subtitle", {
      type: "chars",
      charsClass: "interlay-chars",
    })
    gsap.set(
      [
        ".csp-chars",
        ".jjn-chars",
        ".euff-chars",
        ".tsundoku-chars",
        "interlay-chars",
      ],
      {
        y: -25,
      }
    )
  }, [])
  const ShowSubText = (target1, target2, target3) => {
    gsap.fromTo(
      target1,
      0.4,
      { y: 25 },
      { y: 0, stagger: 0.04, ease: "Power4.easeOut" }
    )
    gsap.fromTo(
      target2,
      0.4,
      { y: 25 },
      { y: 0, stagger: 0.04, ease: "Power4.easeOut" },
      "+=0.4"
    )
    gsap.to(target3, 0.5, { css: { color: "#afd0c9" }, ease: "Power4.easeOut" })
    gsap.to(target3, 0.5, {
      css: { "-webkit-text-stroke": "1px #d64b41", ease: "Power4.easeOut" },
    })
  }

  const HideSubText = (target1, target2, target3) => {
    gsap.to(target1, 0.4, { y: 25, stagger: 0.04, ease: "Power4.easeIn" })
    gsap.to(target2, 0.4, { y: 25, stagger: 0.04, ease: "Power4.easeIn" })
    gsap.to(target3, 0.5, { css: { color: "#d64b41" }, ease: "Power4.easeOut" })
    gsap.to(target3, 0.5, {
      css: { "-webkit-text-stroke": "0px #d64b41", ease: "Power4.easeOut" },
    })
  }
  return (
    <section id="Projects1home">
      <h2>Featured Work</h2>
      <div className="content-and-section-gap-2">
        <AniLink
          cover
          to="/interlay"
          direction="right"
          duration={2}
          bg="#d64b41"
        >
          <div style={{ width: "100%" }}>
            <div className="horizontal-rule" />
            <div
              className="featured-project-block"
              onMouseEnter={() => {
                ShowSubText(
                  ".interlay-chars",
                  ".interlay-chars",
                  "#interlay-stroke-title"
                )
              }}
              onMouseLeave={() => {
                HideSubText(
                  ".interlay-chars",
                  ".interlay-chars",
                  "#interlay-stroke-title"
                )
              }}
              role="button"
              tabIndex={0}
            >
              <div className="container-of-subtitle">
                <h6 id="interlay-left-subtitle">Blockchain</h6>
              </div>
              <h3 id="interlay-stroke-title">interBTC</h3>
              <div className="container-of-subtitle">
                <h6 id="interlay-right-subtitle">Jan - July 2021</h6>
              </div>
            </div>
          </div>
        </AniLink>
        <AniLink cover to="/kyc" direction="right" duration={2} bg="#d64b41">
          <div style={{ width: "100%" }}>
            <div className="horizontal-rule" />
            <div
              className="featured-project-block"
              onMouseEnter={() => {
                ShowSubText(
                  ".tsundoku-chars",
                  ".tsundoku-chars",
                  "#tsundoku-stroke-title"
                )
              }}
              onMouseLeave={() => {
                HideSubText(
                  ".tsundoku-chars",
                  ".tsundoku-chars",
                  "#tsundoku-stroke-title"
                )
              }}
              role="button"
              tabIndex={0}
            >
              <div className="container-of-subtitle">
                <h6 id="tsundoku-left-subtitle">Blockchain</h6>
              </div>
              <h3 id="tsundoku-stroke-title">KYC on Ethereum</h3>
              <div className="container-of-subtitle">
                <h6 id="tsundoku-right-subtitle">Nov - Dec 2020</h6>
              </div>
            </div>
            <div className="horizontal-rule" />
          </div>
        </AniLink>
        <AniLink cover to="/csp" direction="right" duration={2} bg="#d64b41">
          <div style={{ width: "100%" }}>
            <div
              className="featured-project-block"
              onMouseEnter={() => {
                ShowSubText(".csp-chars", ".csp-chars", "#csp-stroke-title")
              }}
              onMouseLeave={() => {
                HideSubText(".csp-chars", ".csp-chars", "#csp-stroke-title")
              }}
              role="button"
              tabIndex={0}
            >
              <div className="container-of-subtitle">
                <h6 id="csp-left-subtitle">Corporate Showcase</h6>
              </div>
              <h3 id="csp-stroke-title">csp singapore</h3>
              <div className="container-of-subtitle">
                <h6 id="csp-right-subtitle">June - August 2020</h6>
              </div>
            </div>
            <div className="horizontal-rule" />
          </div>
        </AniLink>
        {/* <AniLink cover to="/jjn" direction="right" duration={2} bg="#d64b41">
          <div style={{ width: "100%" }}>
            <div
              className="featured-project-block"
              onMouseEnter={() => {
                ShowSubText(".jjn-chars", ".jjn-chars", "#jjn-stroke-title")
              }}
              onMouseLeave={() => {
                HideSubText(".jjn-chars", ".jjn-chars", "#jjn-stroke-title")
              }}
              role="project-button-to-new-page"
            >
              <div className="container-of-subtitle">
                <h6 id="jjn-left-subtitle">Research and Blog</h6>
              </div>
              <h3 id="jjn-stroke-title">jjn org.</h3>
              <div className="container-of-subtitle">
                <h6 id="jjn-right-subtitle">May - July 2020</h6>
              </div>
            </div>
            <div className="horizontal-rule" />
          </div>
        </AniLink> */}
        <AniLink cover to="/euff" direction="right" duration={2} bg="#d64b41">
          <div style={{ width: "100%" }}>
            <div
              className="featured-project-block"
              onMouseEnter={() => {
                ShowSubText(".euff-chars", ".euff-chars", "#euff-stroke-title")
              }}
              onMouseLeave={() => {
                HideSubText(".euff-chars", ".euff-chars", "#euff-stroke-title")
              }}
              role="button"
              tabIndex={0}
            >
              <div className="container-of-subtitle">
                <h6 id="euff-left-subtitle">Festival Showcase</h6>
              </div>
              <h3 id="euff-stroke-title">euff india</h3>
              <div className="container-of-subtitle">
                <h6 id="euff-right-subtitle">May - June 2019</h6>
              </div>
            </div>
            <div className="horizontal-rule" />
          </div>
        </AniLink>
      </div>
    </section>
  )
}

export default FeaturedProjects
