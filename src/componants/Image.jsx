import React from 'react'

const Image = ({imgSrc, imgAlt,className}) => {
  return (
  <img className={`${className}`} src={imgSrc} alt={imgAlt} />
  )
}

export default Image