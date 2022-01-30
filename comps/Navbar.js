import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src="/logo.png" width={100} height={77} />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/components">
          <a>My Listing</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
