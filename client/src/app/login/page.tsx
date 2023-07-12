"use client";
import { useState } from "react";
import loginImage from "../../../public/loginImage.png";
import Image from "next/image";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const [,setCookies] = useCookies(['access_token'])

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:3001/api/users/login',{username,password})
      setCookies('access_token', response.data.token)
      window.localStorage.setItem("userID", response.data.userID)
      router.push("/")
      

    }
    catch(err){
      console.error(`message: ${err}`)
      alert(`Error message: ${err}`)
    }
    
  }

  return (
    <section className="flex flex-col md:flex-row max-w-5xl mx-auto my-12 items-center align-middle md:space-x-8">
      <div className=" text-white w-4/5 md:w-1/2 hidden md:flex flex-col items-center justify-center space-y-8 align-middle">
        <Image
          src={loginImage}
          alt="Login Image"
          width={400}
          className="rounded-lg"
        />
      </div>
      <form onSubmit={handleSubmit}
      className="bg-white h-96 border-gray-100 border-[1px] rounded-2xl w-4/5 md:w-1/2 flex flex-col items-center justify-center space-y-8">
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
        <button type="submit" className="px-24 py-4 rounded-md w-3/6 bg-purple-700 text-white font-bold">
          Login
        </button>
      </form>
    </section>
  );
};

export default page;
