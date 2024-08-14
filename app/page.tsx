import { Metadata } from "next";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('../public/images/london.jpg')] bg-cover h-[calc(100vh-74px)] w-screen max-w-full text-white">
      <div className="text-center p-6 md:p-28">
        <h1 className="text-4xl font-bold py-5">Hello, I'm Gregor</h1>
        <p className="text-2xl mb-10">
          I'm a London based software developer focused on writing clean,
          elegant code and crafting user friendly experiences
        </p>
        <Link
          href="/projects"
          className="bg-white text-black py-5 px-12 border-2 border-gray-800 text-xl font-bold hover:text-white hover:bg-gray-800 hover:border-white transition-all"
        >
          View my work
        </Link>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Gregor Cox - Software Developer",
  description: "Homepage for Gregor Cox's site",
};
