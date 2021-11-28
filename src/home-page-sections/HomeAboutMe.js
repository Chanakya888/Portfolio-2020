import React, { useEffect } from "react"
import ButtonComponent from "../components/ButtonComponent"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"
import { buttonAnimation } from "../util-functions/componentAnimations"
const HomeAboutMe = () => {
  useEffect(() => {
    gsap.set(".button-text", { y: 40 })
    gsap.set("#button-horizontal-rule", { width: "0%" })
  }, [])
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#About1home",
      start: "top 50%",
      onEnter: () => buttonAnimation("no-delay"),
    })
  }, [])
  return (
    <section id="About1home">
      <h2>About me</h2>
      <div className="content-and-section-gap">
        <p>
          I have been building on the web professionally for the past three
          years. I love working on the frontend with focus on user experience. I
          have been working as a frontend engineer for the past 3months at{" "}
          <a
            href="https://www.womp.xyz/"
            style={{ textDecoration: "underline", display: "inline" }}
            target="_blank"
          >
            womp.xyz
          </a>{" "}
          to make 3D accessible. During Jan -July 2021, I interned at Interlay
          as a frontend developer and UI/UX Designer where I contributed to the
          design and development of interBTC, a decentralised solution to bring
          Bitcoin onto smart contract supported platforms. Previously, I
          interned as a frontend developer and a UI/UX designer for Wishbox
          studio, a design agency based in India for a combined time of one
          year(2019&2020) where I worked with several clients like EU embassy of
          India, Just Jobs Network and Capital Square Partners.
        </p>
        <p className="p-padding-top">
          I am a computer science graduate(2017-2021) with elective coursework
          in blockchain, cryptography, distributed systems and design thinking.
          In my blockchain course, I learned to create smart contracts, test
          them and understand the ideology behind decentralisation and community
          governance. These courses sparked my interest in Decentralised
          Protocols. My goal is to build intuitive and seamless experiences
          which board new users from traditional financial sectors onto Defi
          protocols.
        </p>
        <div className="content-and-section-gap-2 ">
          <AniLink
            cover
            to="/about"
            direction="right"
            duration={2}
            bg="#d64b41"
          >
            <ButtonComponent buttonName="Know more" buttonId="know" />
          </AniLink>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutMe
