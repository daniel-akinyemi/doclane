'use client'
import SingleDocuments from '@/components/SingleDocuments'
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {

  const [document,setDocument] = useState({
    
  })
  
  const response = axios.get(`${process.env.URI}/api/documents/`, document)

  return (
    <div className='w-5/6 mx-auto my-4'>
      <section className='my-8'>
        <div className='text-2xl font-extrabold border-b-4'>Collections</div>
        <section>
          <SingleDocuments/>
          {/* {response.map((data,index)=>(
            <div key={index}>
              <SingleDocuments setData={data}/>
            </div>
          ))} */}
          
        </section>
     </section>
    </div>
  )
}

export default page