import React from 'react'
import loading from '../img/load.gif'

export const Spinner = () => {
  return (
    <>
        <div className="spinner text-center my-5">
            <img src={loading} alt="Loading" style={{height: '10%', width: '10%'}}/>
        </div>
    </>
  )
}
