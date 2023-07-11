import Image from "next/image";
import Link from "next/link";
import doclaneImage from '../../public/doclaneImage.png'

const Navbar = () => {
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
      <div className="space-x-8 font-bold flex items-center">
        
        <Link href="/login">Login</Link>
        <Link href="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
