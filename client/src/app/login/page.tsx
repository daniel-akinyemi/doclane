import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col md:flex-row max-w-5xl mx-auto my-12 items-center space-y-8 md:space-x-8'>
      <div className='bg-blue-500 h-24 text-white w-4/5 md:w-1/2 flex flex-col items-center justify-center space-y-8'>
        Image Here
      </div>
      <div className='bg-gray-200 h-96 px-4 w-4/5 md:w-1/2 flex flex-col items-center justify-center space-y-8'>
        <input type='text' placeholder='Email' className='p-4 rounded-md'/>
        <input type='text' placeholder='Password' className='p-4 rounded-md'/>
        <button className='px-24 py-4 rounded-md bg-gray-700 text-white'>Login</button>
      </div>
    </section>
  )
}

export default page