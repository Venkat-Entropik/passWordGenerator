import React from 'react'

const Length = ({label,onChange}) => {
  return (
    <div>
        <input type="number" name='length' id='length' onChange={(e)=>{
            onChange(e.target.value)
        }}/>
    </div>
  )
}

export default Length