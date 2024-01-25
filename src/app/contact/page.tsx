import { NextPage } from "next";
import Link from "next/link";

const Contact: NextPage = async () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link href="/">Go to home</Link>
    </div>
  );
};

export default Contact;
