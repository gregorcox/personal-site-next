import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { data } from "../files/data";

export default function Projects() {
  const projects = data.projects.map((project) => {
    const { descriptionBlocks, github, id, images, link, name } = project;

    const projectImages = images.map((image) => {
      return (
        <Image
          alt={name}
          className="w-full h-auto max-w-[90%] mb-4 border-2 border-black"
          key={id}
          src={image}
        />
      );
    });

    const description = descriptionBlocks.map((block, index) => {
      return <p key={index}>{block}</p>;
    });

    const className =
      id % 2 === 0
        ? "flex mt-8 border-dotted border-gray-500 pb-12 border-b-4 flex-col-reverse md:flex-row-reverse md:mt-12"
        : "flex mt-8 border-dotted border-gray-500 pb-12 border-b-4 flex-col-reverse md:flex-row md:mt-12";

    return (
      <div className={className} key={id}>
        <div className="w-auto mt-8 md:w-1/2 md:mt-0">{projectImages}</div>

        <div
          className={`tracking-wide leading-8 w-full md:w-1/2 ${
            id % 2 === 0 && `mr-8`
          }`}
        >
          <h2 className="text-2xl mb-5">{name}</h2>
          <div className="my-5">
            <a
              className="text-lg text-blue-400"
              href={github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            {link && (
              <span>
                {" - "}
                <a
                  className="text-blue-400"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </span>
            )}
          </div>
          {description}
        </div>
      </div>
    );
  });

  return <div className="text-black p-6">{projects}</div>;
}

export const metadata: Metadata = {
  title: "Projects - Gregor Cox",
  description: "Check out my latest projects",
};
