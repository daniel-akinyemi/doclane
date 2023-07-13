"use client";
import { useState } from "react";
import loginImage from "../../../public/loginImage.png";
import Image from "next/image";
import axios from 'axios'


const page = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      await axios.post('http://localhost:3001/api/users/register',{username,password})
      alert("user created.")
    }catch(err){
      console.error(`message: ${err}`)
      alert(err)
    }
  }

  return (
    <section onSubmit={handleSubmit}
    className="flex flex-col md:flex-row max-w-5xl mx-auto my-12 items-center align-middle md:space-x-8">
      {/* <div className=" text-white w-4/5 md:w-1/2 hidden md:flex flex-col items-center justify-center space-y-8 align-middle">
        <Image
          src={loginImage}
          alt="Login Image"
          width={400}
          className="rounded-lg"
        />
      </div> */}
      <form className="bg-white py-8 border-gray-100 border-[1px] rounded-2xl w-full md:w-1/2 flex flex-col items-center justify-center space-y-8 mx-auto">
        <input
          type="text"
          placeholder="Email"
          className="py-2 px-4 rounded-md border-2 border-gray-300"
          
        />
        <input
          type="text"
          placeholder="Username"
          className="py-2 px-4 rounded-md border-2 border-gray-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-4 rounded-md border-2 border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="py-2 px-4 rounded-md border-2 border-gray-300"
          
        />
        <button type="submit" className="px-16 py-4 rounded-md w-3/6 bg-purple-700 text-white font-bold">
          Sign Up
        </button>
      </form>
    </section>
  )
}

export default page