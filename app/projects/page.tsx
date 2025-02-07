import { Metadata } from "next";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { data } from "../files/data";

export const metadata: Metadata = {
  title: "Projects - Gregor Cox",
  description: "Check out my latest projects",
};

export default function Projects() {
  const projects = data.projects.map(
    ({ descriptionBlocks, github, id, images, link, name }) => {
      const projectImages = images.map((image) => (
        <Image
          alt={name}
          className="w-full h-auto max-w-[90%] border-2 border-black shadow-lg rounded-md"
          key={image.src}
          quality={100}
          src={image}
        />
      ));

      const description = descriptionBlocks.map((block, index) => (
        <>
          <p key={index} className="text-lg tracking-wide leading-8">
            {block}
          </p>
          <br />
        </>
      ));

      const className =
        id % 2 === 0
          ? "project-section md:flex-row-reverse"
          : "project-section md:flex-row";

      return (
        <div className={className} key={id}>
          <div className="flex flex-col items-center gap-4 w-auto mt-8 md:w-1/2 md:mt-0">
            {projectImages}
          </div>

          <div
            className={`tracking-wide leading-8 w-full md:w-1/2 ${
              id % 2 === 0 && `mr-8`
            }`}
          >
            <h2 className="text-3xl font-medium mb-5">{name}</h2>
            {description}
            <div className="flex gap-3 flex-col">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto md:mx-0 flex items-center justify-center gap-2 max-w-[300px] min-w-[220px] bg-blue-500 text-white py-3 px-6 text-lg font-medium rounded-3xl hover:cursor-pointer hover:bg-blue-600 transition duration-300 focus:ring-4 focus:ring-gray-400"
              >
                GitHub
                <FaGithub />
              </a>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto md:mx-0 flex items-center justify-center gap-2 max-w-[300px] min-w-[220] bg-blue-500 text-white py-3 px-6 text-lg font-medium rounded-3xl hover:cursor-pointer hover:bg-blue-600 transition duration-300 focus:ring-4 focus:ring-gray-400"
                >
                  See the project
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>
        </div>
      );
    }
  );

  return <div className="text-black p-6">{projects}</div>;
}
