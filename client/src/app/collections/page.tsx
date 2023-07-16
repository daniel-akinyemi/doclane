import axios from 'axios'
import React, { useState } from 'react'

const page = () => {

  const [document,setDocument] = useState({
    
  })
  
  axios.get(`${process.env.URI}/api/documents/`, {})

  return (
    <div>

    </div>
  )
}

export default page