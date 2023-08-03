import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 sticky p-4 top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bolld text-white grid place-content-center mb-2 md:mb-0">
          <Link
            className="text-white/90 no-underline hover:text-orange-500"
            href="/"
          >
            TyW-98
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-orange-400 "
            href="https://twitter.com/home?"
          >
            <FaTwitter />
          </Link>
          <Link
            className="text-white/90 hover:text-orange-400"
            href="https://github.com/"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-orange-400"
            href="https://linkedin.com/"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  );
}
