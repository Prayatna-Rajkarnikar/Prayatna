import React from "react";
import css from "../images/css.png";
import html from "../images/html.png";
import figma from "../images/figma.png";
import photoshop from "../images/photoshop.png";
import illustartor from "../images/illustrator.png";
import react from "../images/React.png";
import nodejs from "../images/Node.js.png";
import tailwind from "../images/Tailwind.png";
import java from "../images/Java.png";
import mongo from "../images/MongoDB.png";
import mysql from "../images/MySQL.png";
import android from "../images/Android.png";
import flutter from "../images/Flutter.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="text-center m-3">
        <h3 className="text-2xl pt-5 pb-4 font-semibold dark:text-gray-200">
          Tools and Technologies I know
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
          As a passionate Mobile App and Web Developer, I have honed my skills
          in a wide array of tools and technologies that enable me to create
          dynamic, responsive, and user-friendly applications.
        </p>
      </div>
      <div className="p-9 bg-gray-200 rounded-xl text-center mb-5 dark:bg-indigo-400 ">
        <h4 className="text-lg font-bold  dark:text-gray-700">Design Tools</h4>
        <div className="flex justify-center mt-5 gap-9">
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={photoshop} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              Photoshop
            </p>
          </div>
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={illustartor} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              Illustrator
            </p>
          </div>
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={figma} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              Figma
            </p>
          </div>
        </div>
      </div>
      <div className="p-9 bg-gray-200 rounded-xl text-center mb-5 dark:bg-indigo-400">
        <h4 className="text-lg font-bold dark:text-gray-700">Databases</h4>
        <div className="flex justify-center m-5 gap-10">
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={mysql} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              MySQL
            </p>
          </div>
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={mongo} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              MongoDB
            </p>
          </div>
        </div>
      </div>
      <div className="p-9 bg-gray-200 rounded-xl text-center mb-5 dark:bg-indigo-400">
        <h4 className="text-lg font-bold dark:text-gray-700">
          Frontend and Backend
        </h4>
        <div className="flex justify-center m-5 gap-10">
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={html} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              HTML5
            </p>
          </div>
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={css} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              CSS3
            </p>
          </div>
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={react} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              React
            </p>
          </div>
        </div>
        <div className="flex justify-center m-5 gap-10">
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={tailwind} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              Tailwind CSS
            </p>
          </div>
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={nodejs} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              Node.Js
            </p>
          </div>
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={java} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              Java
            </p>
          </div>
        </div>
      </div>
      <div className="p-9 bg-gray-200 rounded-xl text-center mb-5 dark:bg-indigo-400">
        <h4 className="text-lg font-bold dark:text-gray-700">
          Mobile Development
        </h4>
        <div className="flex justify-center m-5 gap-10">
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={android} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              Android
            </p>
          </div>
          <div className="flex">
            <img className="h-10 w-10 mx-2" src={flutter} alt="skill" />
            <p className="mt-2 text-gray-800 font-semibold dark:text-gray-600">
              Flutter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
