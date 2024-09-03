import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import developer from "../images/developer.jpg";

const Home = () => {
  return (
    <section id="home">
      <div className="text-center p-10 flex-1">
        <h2 className="text-5xl py-2 text-indigo-400 font-bold md:text-6xl">
          Prayatna Rajkarnikar
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
          Web and Mobile App Developer
        </h3>
        <p className="text-md pt-5 pb-1 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
          Hello 👋. I am devoted Mobile App and Web Developer focused on
          building innovative, user-friendly applications. I am dedicated to
          continuous learning with the goal of driving impactful digital change.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-10  pb-7 text-gray-700 dark:text-gray-200 cursor-pointer">
        <a href="https://www.linkedin.com/in/prayatna-rajkarnikar-b797a52b6/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/Prayatna-Rajkarnikar">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/rajkarnikar._.prayatna/">
          <AiFillInstagram />
        </a>
      </div>
      <div className="w-auto h-80 max-w-lg mx-auto md:h-96 md:w-auto">
        <img className="rounded-2xl" alt="" src={developer} />
      </div>
    </section>
  );
};
export default Home;
