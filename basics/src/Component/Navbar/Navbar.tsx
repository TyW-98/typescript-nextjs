import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <Link href="/">Home page</Link>
      <Link href="/about">About page</Link>
    </div>
  );
}
