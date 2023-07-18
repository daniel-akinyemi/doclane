'use client'
import { useState } from "react";
import axios from 'axios'
import { useUserID } from "@/hooks/useUserID";


const page = () => {
  const userID = useUserID()
  const [newDoc,setNewDoc] = useState({
    title:"",
    description:"",
    imageUrl:"",
    content:"",
    docOwner:userID,
  })

  const handleChange =(e)=>{
    const {name,value} = e.target
    setNewDoc({...newDoc,[name]:value})
  }
  
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:3001/api/documents/', newDoc)
      console.log(response)
      alert('Document Created')
    }catch(err){
      console.error(err)
      alert(err)
    }
  }
  {console.log(newDoc)}
  return (
    <div>
      <form className="space-y-4 w-10/12 mx-auto my-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          
          <input type="text" id="title" placeholder="Title" name='title' onChange={handleChange} className="px-4 py-2 border-2 border-gray-500"/>
        </div>
        <div>
          <label htmlFor="description"></label>
          <input type="text" id="description" placeholder="description" onChange={handleChange} name='description' className="px-4 py-2 border-2 border-gray-500"/>
        </div>
        <div>
          <label htmlFor="content"></label>
          <input type="text" id="content" placeholder="Content" name='content' onChange={handleChange} className="px-4 py-2 border-2 border-gray-500"/>
        </div>
        <button type="submit" className="px-16 py-2 rounded-lg bg-gray-700 text-white h-40">Submit Document</button>
      </form>
    </div>
  );
};

export default page;
