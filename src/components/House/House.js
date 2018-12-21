import React from 'react'

export default function House(props){
  const { propertyname, address, city, state, zip } = props.house
  return (
    <div className='house-card'>
      <p>Name: {propertyname}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip Code: {zip}</p>
    </div>
  )
}