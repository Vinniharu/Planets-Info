import React, { Fragment } from 'react'
import Slider from '../Slider/Slider'
import { useParams } from 'react-router'

const PlanetDetails = () => {
   const {planetId} = useParams()

  return (
    <div>
      <section className='mb-[4rem]'>
        <Slider planet={planetId} />
      </section>
    </div>
  );
}

export default PlanetDetails