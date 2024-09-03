import React from "react";
import secure from "../images/authentication.jpg";
import portfolio from "../images/mobilePortfolio.jpg";
import helmet from "../images/helmet.jpg";
import blog from "../images/blog.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <div className="text-center">
        <h3 className="text-2xl pt-7 pb-4 font-semibold dark:text-gray-200">
          Projects
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          Throughout my journey as a Mobile App and Web Developer, I have worked
          on a diverse range of projects that demonstrate my ability to design
          and implement innovative solutions.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row flex-wrap">
        <a
          href="https://github.com/Prayatna-Rajkarnikar/Secure-Authentication"
          className="basis-1/3 flex-1 relative group"
        >
          <img
            className="rounded-lg object-cover max-h-80"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={secure}
            alt="project"
          />
          <div className="absolute inset-0 bg-purple-800 bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg cursor-pointer">
            <p className="text-white text-lg font-semibold">
              Secure Authentication
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Prayatna-Rajkarnikar/Blog-API"
          className="basis-1/3 flex-1 relative group"
        >
          <img
            className="rounded-lg object-cover max-h-80"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={blog}
            alt="project"
          />
          <div className="absolute inset-0 bg-purple-800 bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg cursor-pointer">
            <p className="text-white text-lg font-semibold">Blog API</p>
          </div>
        </a>
        <a
          href="https://github.com/Prayatna-Rajkarnikar/My-Portfolio"
          className="basis-1/3 flex-1 relative group"
        >
          <img
            className="rounded-lg object-cover max-h-80"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={portfolio}
            alt="project"
          />
          <div className="absolute inset-0 bg-purple-800 bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg cursor-pointer">
            <p className="text-white text-lg font-semibold">Mobile Portfolio</p>
          </div>
        </a>
        <a
          href="https://github.com/Prayatna-Rajkarnikar/topguard_helmets"
          className="basis-1/3 flex-1 relative group"
        >
          <img
            className="rounded-lg object-cover max-h-80"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={helmet}
            alt="project"
          />
          <div className="absolute inset-0 bg-purple-800 bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg cursor-pointer">
            <p className="text-white text-lg font-semibold">
              Helmet E-commerce
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
