'use client'
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {

  const [document,setDocument] = useState({
    
  })
  
  axios.get(`${process.env.URI}/api/documents/`, {})

  return (
    <div className='w-5/6 mx-auto my-4'>
      <section className='my-8'>
        <div className='text-2xl font-extrabold border-b-4'>Collections</div>
     </section>
    </div>
  )
}

export default page