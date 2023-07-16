import axios from 'axios'
import React from 'react'

const page = () => {
  
  axios.get(`${process.env.URI}/api/documents/`, {})

  return (
    <div>

    </div>
  )
}

export default page