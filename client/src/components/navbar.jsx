'use client'
import Image from "next/image";
import Link from "next/link";
import doclaneImage from '../../public/doclaneImage.png'
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies,setCookies] = useCookies(["access_token"])
  return (
    <div className="flex mx-auto items-cente justify-around py-4 bg-gray-100">
      <div>
        <Link href='/'>
        <Image
        alt={"doclane-logo"}
        src={doclaneImage}
        width={120}
        />
        </Link>
      </div>
      <div className="space-x-8 flex items-center font-extrabold">
        {!cookies.access_token ? <Link href="/login">Login</Link> :<Link href="/collections">Collections</Link>}
        {!cookies.access_token ? <Link href="/sign-up">Sign up</Link> :<Link href="/profile">Profile</Link>}
        
        
        
        
      </div>
    </div>
  );
};

export default Navbar;
