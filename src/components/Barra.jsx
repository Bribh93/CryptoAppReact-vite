import React from 'react'

export const Barra = () => {
  return (
    <div className=' my-40 bg-black/[.3] rounded-md'>
        <div className='flex  justify-around p-10 text-2xl text-gray-200 text-center'>
            <h3 className='grid place-items-center'>Stats Speak for Themselves</h3>
            <p className='grid place-items-center'>|</p>
            <div>
                <p>98%</p>
                <p>User Satisfaction</p>
            </div>
            <p className='grid place-items-center'>|</p>
            <div>
                <p>5M+</p>
                <p>Cool Number</p>
            </div>
            <p className='grid place-items-center'>|</p>
            <div>
                <p>4.9</p>
                <p>Google Review</p>
            </div>
            <p className='grid place-items-center'>|</p>
            <div>
                <p>27+</p>
                <p>Api Integration</p>
            </div>
            
        </div>
    </div>
  )
}
