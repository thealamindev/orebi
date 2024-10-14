import React from 'react'

const Badge = ({text, className}) => {
  return (
    <div className={`bg-black text-white font-dm font-bold text-sm w-[87px] py-[13px] text-center ${className}`}>{text}</div>
  )
}

export default Badge