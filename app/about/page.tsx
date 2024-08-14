import profile from "@/public/images/profile.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="text-black text-center py-6 px-6 md:px-28">
      <h1 className="text-3xl">About me</h1>

      <div className="flex flex-col mt-8 md:flex-row justify-evenly">
        <div className="text-left w-auto tracking-wide leading-8 md:w-1/2">
          <strong>
            I am passionate about software development and all things web. I
            love being able to turn complex problems into great looking user
            interfaces.
          </strong>
          <br />
          <br />
          I am currently working as a front-end developer at a digital agency in
          Shoreditch where I use JavaScript to build and maintain large scale
          web applications for a wide range of clients.
          <br />
          <br />
          Before moving to London I graduated from CodeClan's software
          development course in Edinburgh. Throughout the 16 week course I
          developed strong programming skills in Ruby, Java, and JavaScript with
          a particular focus on web development. The course involved around 800
          hours of class time and personal study, daily pair programming labs
          and three full-stack projects (you can check those out{" "}
          <Link className="text-blue-400" href="/projects">
            here
          </Link>
          ). <br />
          <br />
        </div>

        <div className="w-full text-center md:w-[45%] md:ml-6">
          <Image
            src={profile}
            alt="Gregor Cox"
            className="h-auto w-[90%] md:max-w-96"
          />
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About - Gregor Cox",
  description: "About me",
};
