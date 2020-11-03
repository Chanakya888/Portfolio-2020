import React from "react"

const ButtonComponent = props => {
  return (
    <div style={{ width: "max-content" }}>
      <h4>{props.buttonName}</h4>
      <div className="horizontal-rule padding-between-hr-and-button"></div>
    </div>
  )
}

export default ButtonComponent
