import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =width < 650?"":"https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif"
	return (
		<div
			data-aos='fade-down'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={img} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					"//Add intro"
					"//Add 
					what if universe is just code
					<br />
					<br />
					in home.jsx"
				</p>
			</div>
		</div>
	);
};

export default About;
