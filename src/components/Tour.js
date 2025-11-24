import React, { useState } from 'react'
import Tour from './Tour'

function Tours({ tours, removeTour }) {

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">Our Tours</h1>
      <div className="grid gap-6">
        {tours.map((tour) => (
          //  id, name, info, image, price, removeTour
          <Tour key={tour.id} id={tour.id} name={tour.name} info={tour.info} image={tour.image} price={tour.price} removeTour={removeTour} />
        ))}
      </div>
    </>
  )
}

export default Tours