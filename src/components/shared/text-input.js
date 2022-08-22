import React from 'react'

const TextInput = ({Label,value, onChange, placeholder}) => {
  return (
      <div>
        {Label}
        <input 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}
        />
    </div>
  )
}

export default TextInput
