import Link from "next/link";
import Image from "next/image";

export const Navbar = () => (
  <div className="flex justify-between">
    <Image src="top-left-rule.svg" width={60} height={60} alt="Top left rule" />
    <div className="flex space-x-8">
      <Link href="/">
        <p className="font-bold text-lg link-underline">Home</p>
      </Link>
      <Link href="/contact">
        <p className="font-bold text-lg link-underline">Contact</p>
      </Link>
    </div>
  </div>
);
