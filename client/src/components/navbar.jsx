import Image from "next/image";
import Link from "next/link";
import doclaneImage from '../../public/doclaneImage.png'

const Navbar = () => {
  return (
    <div className="flex mx-auto w-4/5 items-cente justify-around my-4">
      <div>
        <Image
        alt={"logo"}
        src={doclaneImage}
        width={120}
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
