import React from 'react'

const PasswordGenerator = ({handleText,setHandleText}) => {
  return (
    <div className='passwordGenerator'>
            <input className='main' type="text" value={handleText} onChange={(e)=>{
                setHandleText(e.target.value)
            }} />
            
    </div>
  )
}

export default PasswordGenerator