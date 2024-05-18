import React from 'react'

const DataReading = (props) => {
  return (
    <div className='border p-4 w-full flex items-start justify-between md:flex-col'>
      <p className='text-gray-500 font-bold text-lg'>{props.title}</p>
      <h1 className='font-[Antonio] text-white text-xl md:text-4xl font-semibold'>{props.data}</h1>
    </div>
  )
}

export default DataReading