import github from "@/public/images/github.png";
import linkedin from "@/public/images/linkedin.png";
import { Metadata } from "next";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="text-black text-center p-6">
      <h1 className="text-3xl">Contact me</h1>
      <p className="my-4 tracking-wide leading-8">
        To have a conversation, contact me at{" "}
        <a
          className="hover:text-blue-400 transition-colors"
          href="mailto:gregorcox@gmail.com?Subject=Hey%20Gregor!"
          target="_top"
        >
          gregorcox@gmail.com
        </a>
      </p>
      <p className="mb-4">or find me on:</p>
      <div className="inline-flex">
        <a
          href="https://www.linkedin.com/in/gregorcox/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="LinkedIn"
            className="mx-4 pb-2 border-b-white border-b-8 hover:border-blue-400 transition-all"
            height="80"
            src={linkedin}
            width="80"
          />
        </a>
        <a
          href="https://www.github.com/gregorcox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="GitHub"
            className="mx-4 pb-2 border-b-white border-b-8 hover:border-blue-400 transition-all"
            height="80"
            src={github}
            width="80"
          />
        </a>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Contact Me - Gregor Cox",
  description: "Connect with me through LinkedIn or GitHub",
};
