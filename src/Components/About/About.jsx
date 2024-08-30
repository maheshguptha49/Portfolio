import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://i.imgur.com/7HpZ729.png"
      : "https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif";
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img src={img} alt="" />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
        I am a Passionate and innovative frontend developer with around 3 years of
      experience crafting pixel-perfect, responsive web apps that engage users &
       drive results. Proficient in JavaScript,React and next js with a knack for
      translating design visions into high-quality, high-performing code. Proven
     track record of enhancing user experiences & optimizing performance.
         Collaborative, team player who loves building apps.
        </p>
      </div>
    </div>
  );
};

export default About;
