import React from "react";
import contact from "../images/contact.jpg";
import { useState } from "react";
import axios from "axios";

const ContactMe = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email, phone, message };
    try {
      const response = await axios.post(
        "http://localhost:3001/user/contact",
        userData
      );

      if (response.status === 200) {
        alert("Message sent Successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        alert("Failed");
        console.error("Failed");
      }
    } catch (error) {
      alert("Failed to sent message");
      console.error(error);
    }
  };

  return (
    <section id="contact">
      <h3 className="text-2xl m-5 text-center font-semibold dark:text-gray-200">
        Contact Me
      </h3>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 hidden md:block">
          <img
            className="rounded-2xl h-full w-full"
            src={contact}
            alt="contact"
          />
        </div>
        <div className="flex-1 m-2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-16">
              <input
                className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 dark:border-indigo-500 border-2 ease-linear dark:text-gray-100 w-full"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className="p-4 rounded-xl bg-gray-100 ease-linear dark:bg-gray-800 dark:border-indigo-500 border-2 dark:text-gray-100 w-full"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mt-7">
              <input
                className="p-4 rounded-xl bg-gray-100 w-full md:w-2/3 ease-linear dark:bg-gray-800 dark:border-indigo-500 border-2 dark:text-gray-100"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-7">
              <input
                className="p-4 rounded-xl bg-gray-100 w-full md:w-2/3 ease-linear dark:bg-gray-800 dark:border-indigo-500 border-2 dark:text-gray-100"
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mt-7">
              <textarea
                className="p-4 rounded-xl bg-gray-100 w-full h-full ease-linear dark:bg-gray-800 dark:border-indigo-500 border-2 dark:text-gray-100"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="mt-7">
              <button
                className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white px-10 py-2 rounded-xl w-full md:w-auto"
                type="submit"
              >
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
