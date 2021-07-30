import React from "react"
import BackgroundLayout from "../layoutSections/BackgroundLayout"

const InterlayBackgroundSection = () => {
  return (
    <section id="Background1Interlay">
      <BackgroundLayout
        backgroundContent="
	<p>interBTC realizes the true free nature of BTC and decentralized finance. 
	A 1:1 Bitcoin-backed asset, fully collateralized, interoperable, and censorship-resistant. 
	I worked for Interlay from January 2021 to July 2021 as a UI/UX designer and a frontend developer.Being a startup with around 10 developers, 
	I had a mixed bag of responsibilities. I started with working on a deadline where I designed the polkaBTC(now interBTC) app in less than two weeks right in time for beta launch. Later, 
	when we transitioned to interBTC, I built a design system in Figma and converted it into code using react and storybook components. I’ve also worked on developing user flows, wireframes 
	and redesigned UI of the application with new features like Vault staking and Vault activity. I've also worked on developing interlay's website and several interBTC app features. </p>
	<p>The biggest challenge that I faced when starting out with the Interlay is the complexity of interBTC. 
	Being a decentralised system having multiple system maintainers which results in a lot of edge cases, it was essential to abstract the complex mechanism and provide the user with a seamless experience of Bitcoin Defi.
	</p>
	"
        agency="<li>Interlay</li>"
        roles="<li>UI/UX Designer</li><li>Frontend Developer</li>"
        missions="<li>Wireframing</li><li>UI Design</li><li>Development</li>"
        tools="<li>Figma</li><li>React JS</li><li>TypeScript</li><li>Tailwind Css</li>"
      />
    </section>
  )
}

export default InterlayBackgroundSection
