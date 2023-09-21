import React from 'react'
 
const Button = ({cta}) => {
  return (
    <div>
       <button className="gradient py-2 px-8 rounded text-sm">{cta}</button>
    </div>
  )
}

export default Button
