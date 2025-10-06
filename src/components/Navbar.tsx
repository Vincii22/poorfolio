"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-md ">
      <div className="max-w-4xl mx-auto flex justify-center items-center py-3">
        <ul className="flex items-center space-x-8 text-sm text-gray-300">
          <li className="text-base md:text-base font-bold"><Link href="#about" className="hover:text-cyan-400  transition">About</Link></li>
          <li className="text-base md:text-base font-bold"><Link href="#experience" className="hover:text-cyan-400  transition">Experience</Link></li>
          {/* Logo in the center */}
          <li>
            <Link href="#hero" className="flex items-center hover:scale-150 transition-transform duration-300">
                <Image
                src="/logo.png" // 🖼️ Replace with your logo path
                alt="Logo"
                width={150}
                height={150}
                className="mx-2"
                />
            </Link>

          </li>


          <li className="text-base md:text-base font-bold"><Link href="#projects" className="hover:text-cyan-400  transition">Projects</Link></li>
          <li className="text-base md:text-base font-bold"><Link href="#contact" className="hover:text-cyan-400  transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
