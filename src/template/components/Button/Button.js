import React from 'react'
import "./Button.css"

const Button = ({btnText,btnType}) => {
    let btnClass = ""
    if(btnType === "primary") btnClass ="btn-primary"
  return (
    <button className={btnClass}>{btnText}</button>
  )
}

export default Button