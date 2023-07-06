import Image from "next/image";
import Link from "next/link";
import vercelImage from '../../public/vercel.svg'

const Navbar = () => {
  return (
    <div className="flex mx-auto w-4/5 items-cente justify-around my-4">
      <div>
        <Image
        alt={"logo"}
        src={vercelImage}
        width={80}
        />
      </div>
      <div className="space-x-8 font-bold">
        
        <Link href="/login">Login</Link>
        <Link href="/">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
