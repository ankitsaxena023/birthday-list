import React from 'react'

const Person = ({ name, age, image }) => {
  return (

    <article className='person'>
      <img className='img' src={image} alt={name} />
      <div>
        <h5>{name}</h5>
        <p>{age}</p>
      </div>
    </article>

  )
}

export default Person