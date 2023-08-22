import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Zine Robotics",
      role: "Core Team member",
      url: "https://zine.co.in/",
      start: "July 2022",
      end: "Present",
      shortDescription: [
        "I had experience working with core member on robotics",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, among others.",
        "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
        "Additionally, I've represented the club in IIT Bombay Techfest",
      ],
    },
    {
      name: "E-Cell",
      role: "Web Developer",
      url: "https://cel.mnit.ac.in/",
      start: "April 2022",
      end: "April 2023",
      shortDescription: [
        "Contributed in the website development of E cell",
        "Over time, I have developed frontend skill in React and backend in NodeJs",
        "I have also had the pleasure of collaborating with various member throughout my journey.",
      ],
    },
    {
      name: "C4gt",
      role: "Contributor",
      url: "https://www.codeforgovtech.in/",
      start: "June 2023",
      end: "July 2023",
      shortDescription: [
        "As the contributor of the glific/mobile Project, I successfully contributed in the project.",
        "Additionally, I got to learn new skill and language.",
        "Overall, it was nice working with open source member",
      ],
    },
    {
      name: "BuyBold",
      role: "App Developer",
      url: "",
      start: "November 2022",
      end: "present",
      shortDescription: [
        "Core developer of startUp initiated by one our senior in college",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript,Node Js Gatsby, React, MoongoDb, and Netlify",
        "Communicate with  teams of engineers, designers, and clients on a weekly basis",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
