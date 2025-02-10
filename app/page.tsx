import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Gregor Cox - Software Developer",
  description: "Homepage for Gregor Cox's site",
};

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-70px)] w-screen max-w-full text-white flex items-center justify-center">
      <Image
        src="/images/london.jpg"
        alt="London skyline"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative text-center p-6 z-10 max-w-prose md:p-0 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold py-5 drop-shadow-md">
          Hello, I’m Gregor
        </h1>
        <p className="text-2xl mb-10 drop-shadow-md">
          I’m a London-based software developer focused on writing clean code
          and crafting user-friendly experiences.
        </p>
        <Link
          href="/projects"
          className="w-full mx-auto flex items-center justify-center gap-2 max-w-[260px] bg-white text-black py-4 px-10 text-xl font-bold rounded-2xl border-2 border-gray-800 hover:text-white hover:bg-gray-800 hover:border-white transition duration-300 focus:ring-4 focus:ring-gray-400"
        >
          View my work
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}
