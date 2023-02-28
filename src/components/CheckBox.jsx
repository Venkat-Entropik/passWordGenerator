import React from 'react'

const CheckBox = ({label,onChange}) => {
  return (
    <div>
        <input type="checkbox" name='checkBox' id='checkBox'onChange={()=>{
          onChange()
        }} />
       <label> {label}</label>
    </div>
  )
}

export default CheckBox