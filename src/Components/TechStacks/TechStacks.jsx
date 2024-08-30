import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./TechStacks.module.css";
const skills = [
  {
    class: "devicon-react-original colored",
    skill: "React",
  },
  {
    class: "devicon-javascript-plain colored",
    skill: "JavaScript",
  },
  {
    class: "devicon-typescript-plain colored",
    skill: "Typescript",
  },
  {
    class: "devicon-nextjs-plain colored",
    skill: "Next js",
  },
  {
    class: "devicon-dataspell-plain colored",
    skill: "Data structures and algorithms",
  },
  {
    class: "devicon-nodejs-plain",
    skill: "Node.js",
  },
  {
    class: "devicon-html5-plain colored",
    skill: "HTML",
  },
  {
    class: "devicon-css3-plain colored",
    skill: "CSS",
  },
  {
    class: "devicon-docker-plain-wordmark colored",
    skill: "Docker and kubernetes",
  },
  {
    class: "devicon-tailwindcss-original colored",
    skill: "Tailwind css",
  },
  {
    class: "devicon-redux-original",
    skill: "Redux",
  },
  {
    class: "devicon-mongodb-plain colored",
    skill: "MongoDB",
  },
  {
    class: "devicon-postgresql-plain colored",
    skill: "SQL",
  },
  {
    class: "devicon-express-original",
    skill: "Express",
  },
  {
    class: "devicon-amazonwebservices-plain-wordmark colored",
    skill: "AWS",
  },
  {
    class: "devicon-java-plain colored",
    skill: "Java",
  },
  {
    class: "devicon-java-plain colored",
    skill: "OOPS",
  },
  {
    class: "devicon-jenkins-line colored",
    skill: "CI/CD",
  },
];

const TechStacks = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Skills
      </h1>
      <div className={styles.borderBottom} />
      <div className={styles.container}>
        {skills.map((item) => (
          <div
            key={item.skill}
            style={{
              color: `${newTheme.buttonColor}`,
              background: `${newTheme.linkHover}`,
            }}
            className={styles.logoWrapper}
          >
            <i className={item.class} />
            <span>{item.skill}</span>
          </div>
        ))}
        {/* <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-react-original colored" />
          <span>React</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-javascript-plain colored" />
          <span>Javascript</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-javascript-plain colored" />
          <span>Typescript</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-html5-plain colored" />
          <span>HTML</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-css3-plain colored" />
          <span>CSS</span>
        </div>

        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#7248B6" }} className="devicon-redux-original" />
          <span>Redux</span>
        </div>
        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-npm-original-wordmark colored" />

          <span>Npm</span>
        </div>

        <div
          style={{
            color: `${newTheme.buttonColor}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-materialui-plain colored"></i>
          <span>Material Ui</span>
        </div> */}
      </div>
    </div>
  );
};

export default TechStacks;
