import React from 'react'

const Button = ({onClick}) => {
  return (
    <div>
        <button onClick={()=>{
            onClick()
        }}>Generate Password</button>
    </div>
  )
}

export default Button