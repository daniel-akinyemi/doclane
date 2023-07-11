"use client";
import { useState } from "react";
import loginImage from "../../../public/loginImage.png";
import Image from "next/image";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <form className="bg-white h-96 border-gray-100 border-[1px] rounded-2xl w-4/5 md:w-1/2 flex flex-col items-center justify-center space-y-8">
        <input
          type="text"
          placeholder="Username"
          className="py-2 px-4 rounded-md border-2 border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
