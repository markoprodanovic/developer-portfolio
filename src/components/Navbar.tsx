import Link from "next/link";
import Image from "next/image";

export const Navbar = () => (
  <div className="flex justify-between">
    <Image src="top-left-rule.svg" width={60} height={60} alt="Top left rule" />
    <div className="flex space-x-8">
      <Link href="/contact">
        <p className="font-bold text-lg">Contact</p>
      </Link>
      <Link href="/resume">
        <p className="font-bold text-lg">Resume</p>
      </Link>
    </div>
  </div>
);
