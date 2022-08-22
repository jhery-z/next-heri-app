import React from 'react'

const Select = ({Label, value, onChange, options}) => {
  return (
    <div>
      {Label}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
      ))}
      </select>
    </div>
  )
}

export default Select;