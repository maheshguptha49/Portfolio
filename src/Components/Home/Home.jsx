import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Card from '../Card/Card';
import Typewriter from 'typewriter-effect';
import SideIcons from '../SideIcons/SideIcons';
import TechStacks from '../TechStacks/TechStacks';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Button } from '../Button/Button';
import About from '../About/About';
import { projects } from '../../Utils/Projects';
import Contact from '../Contact/Contact';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';

const Home = ({ scrollRef }) => {
	const [width]=WindowSize()
	console.log(width,"width")
	const [projectArray, setProjectArray] = useState(
		projects
	);
	const { newTheme } = React.useContext(ThemeContext);
	useEffect(() => {
		AOS.init();
	});

	useEffect(() => {
		document.body.style.backgroundColor = newTheme.background;
	}, [newTheme]);

	const handleButton = () => {};

	// const handleShowMoreBtn = () => {
	// 	if (projects.length === projectArray.length) {
	// 		setProjectArray(projects.slice(0, 3));
	// 	} else {
	// 		setProjectArray(projects);
	// 	}
	// };
	return (
		<div ref={scrollRef}>
			<SideIcons />
			<div
				id='top'
				className={styles.profile}
				style={{ backgroundColor: `${newTheme.imgBackground}` }}
			>
				{width>650?<img
					className={styles.profileImage}
					src='https://raw.githubusercontent.com/maheshguptha49/Sandbox/master/PersonalPictiures/profilepic.jpeg'
					alt='Profile pic'
				/>:""}
				<div
					id='home'
					data-aos='fade-zoom-out'
					className={styles.intro}
					style={{ color: `${newTheme.para}` }}
				>
					<h1>
						<span>Hi, My name is</span>
						<div
							className={styles.name}
							style={{ color: `${newTheme.title}` }}
						>
							Mahesh Guptha
						</div>
					</h1>
					<h1>
						<Typewriter
							options={{
								strings: [
									'I am a Full Stack Developer.',
									'I build things on Internet.',
								],
								autoStart: true,
								loop: true,
								delay: 'natural',
								deleteSpeed: 25,
								pauseFor: 1000,
							}}
						/>
						{/* <p style={{fontSize:"85%"}}>I am a Full Stack Developer</p>
						<p style={{fontSize:"85%"}}>I build things on Internet</p> */}
					</h1>
					<div className={styles.btn}>
						<a href='https://drive.google.com/file/d/1iJnkUdxBV6nPgrWPsP7J40hOgqbKTdNq/view?usp=sharing' target="_blank" rel="noreferrer">   
                        {/*  add resume here*/}
							<Button
								text={
									<span className={styles.resumeBtn}>
										<span>See my Resume 😇   </span>{' '}
										{/* <i className='fas fa-file-download'></i> */}
										<i class="fas fa-download"></i>
									</span>
								}
								handleButton={handleButton}
							/>
							{width<=650?<div>
								<a href="#contact"><h2>Contact me</h2></a>
							</div>:""
							}

						</a>
					</div>
					<h2 style={{marginTop:"60px"}}>Programming is an art where mind paints the logic on the Computer.... -Donald Knuth</h2>
				</div>
			</div>


			
			<div
				id='about'
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
				className={styles.tagline}
			>
				<About />
			</div>

			<div id='techstacks' className={styles.techStacks}>
				<TechStacks />
			</div>

			<div
				id='experience'
				className={styles.tagline}
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
			>
				<div
					data-aos='fade-right'
					data-aos-offset='150'
					data-aos-easing='ease-in-sine'
					data-aos-duration='700'
					style={{ color: `${newTheme.para}` }}
				>
					
				</div>
			</div>

			{/* project section from here => */}
			<div id='projects' className={styles.projects}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					Projects
				</h1>
				<div className={styles.borderBottom} />
				<div>
					{projectArray.map((item, index) => (
						<Card key={index} {...item} />
					))}
				</div>
				{/* <Button
					text={
						projects.length !== projectArray.length
							? 'Show More'
							: 'Show Less'
					}
					handleButton={handleShowMoreBtn}
				/> */}
			</div>

			<div
				style={{
					background: `${newTheme.highlightBackground}`,
				}}
			>
				<Contact />
			</div>
		</div>
	);
};

export default Home;
