import React from 'react'

const Icon = ({ name }) => (
  <svg
    className={ name }>
    <use xlinkHref={ `#${ name }` }></use>
  </svg>
)

export default Icon
