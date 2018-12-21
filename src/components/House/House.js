import React from 'react'

export default function House(props){
  const { propertyname, address, city, state, zip, id } = props.house
  console.log(props)
  return (
    <div className='house-card'>
      <p>Name: {propertyname}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip Code: {zip}</p>
      <button className='delete' onClick={() => props.delete(id)}>Delete</button>
    </div>
  )
}