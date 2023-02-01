import React from 'react'

export default function Shimmer() {
  return (
    <div className='restaurant-list'>
      {Array(15).fill("").map((e, index)=> <div key = {index} className="card"> </div>)}
    </div>
  )
}
