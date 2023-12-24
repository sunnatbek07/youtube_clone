import React from 'react'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <div className='w-full'>
      <h2 className='text-5xl md:text-7xl text-center rfont mt-[45%]'>This page is not ready!</h2>
      <div className='text-center w-full text-2xl my-3 text-red-500'>
        <Link to={'/'}>
          {'Back to homepage <-'}
        </Link>
      </div>
    </div>
  )
}

export default History