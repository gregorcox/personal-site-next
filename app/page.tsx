import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-screen h-[700px] relative flex items-center justify-center text-center">
        <Image
          src="/images/park.jpg"
          alt="Park"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="absolute z-10 text-white p-6 max-w-[900px]">
          <h1 className="text-5xl py-5 leading-[1.2]">
            Manor Farm Business Park <br /> in{" "}
            <span className="text-green-500">Stirling</span>
          </h1>
          <p className="text-2xl mb-10 leading-[1.5]">
            Grow your business in the heart of Scotland with our prime location,
            modern spaces, and vibrant community.
          </p>
          <Link
            href="/projects"
            className="bg-green-500 uppercase text-white py-3 px-6 rounded-3xl hover:bg-green-800 transition duration-300"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="mx-6 my-16 lg:mx-32 lg:my-32 flex gap-16 flex-col-reverse md:flex-row">
        <Image
          src="/images/manorfarm.jpg"
          alt="Manor Farm Business Park"
          width={450}
          height={450}
        />
        <div className="max-w-[800px]">
          <h2 className="text-5xl text-green-950 mb-3">About us</h2>
          <p className="text-lg tracking-wide mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            placerat justo nec augue vestibulum, id tincidunt ex sollicitudin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            placerat justo nec augue vestibulum, id tincidunt ex sollicitudin.
          </p>
          <Link
            href="/projects"
            className="uppercase text-green-950 transition duration-300"
          >
            Learn more
          </Link>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Manor Farm Business Park | Stirling",
  description: "Homepage for Manor Farm Business Park in Stirling",
};
