import React from "react"
const InterlayWhatIWorkedOnSection = () => {
  return (
    <section id="Work1Interlay" className="section-gap">
      <h2>II. What I worked on</h2>
      <div className="content-and-section-gap">
        <p>
          I’ve created user flows to cover edge cases that a user can run into
          while using the application, this allowed us to create descriptive
          error messages that can be shared in our community channels for devs
          to debug. We based the look and feel of the application to similar
          apps like renBTC and wBTC that brings Bitcoin onto smart contract
          platforms but in a centralised way, we feel this allows avid Defi
          users to quickly use the application as it establishes familiarity and
          reducing the cognitive load to use a new app.
        </p>
        <p>
          I’ve contributed heavily to the UX of the application. I’ve redesigned
          the flow of the application to make the whole issuing and redeeming
          interBTC a seamless experience. I’ve designed a staking feature that
          allows users to stake their DOT in vaults for rewards while allowing
          vaults to use this stake as collateral to issue more interBTC, thereby
          increasing the Total value locked in the platform. I’ve also worked on
          designing dashboards for users and vaults, allowing them to monitor
          their collaterals and stake.
        </p>
        <p>
          On the UI part of the application, I’ve contributed to building a
          design system for interBTC, the objective of the design system is to
          allow easy scalability of interBTC in the future with already
          established design components and variants in Figma. This design
          system also allows consistency in the design of interBTC as all the
          design components and branding colors are established. On the dev
          side, I’ve worked with react and storybook components to build the
          design system, storybook allows for rapid prototyping and testing of
          individual components in isolation. The app was initially developed
          using Scss, we’ve refactored the application to use Tailwind CSS. This
          refactoring helped us to establish standard class names while multiple
          devs are working on the UI. I’ve contributed to refactoring parts of
          the application and developed UI features using React and Tailwind
          CSS.
        </p>
      </div>
    </section>
  )
}

export default InterlayWhatIWorkedOnSection
