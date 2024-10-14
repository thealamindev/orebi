import React from 'react'

const Menu = ({className,menuName}) => {
  return (
    <ul>
        <li className={`font-dm text-sm text-menuC hover:text-menuHc hover:font-bold ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu