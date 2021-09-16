import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';

const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'
		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Skills
			</h1>
			<div className={styles.borderBottom} />
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Front End
			</h1>
			<div className={styles.borderBottom} />
			<div className={styles.container}>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-html5-plain colored' />
					<span>HTML</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-css3-plain colored' />
					<span>CSS</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-javascript-plain colored' />
					<span>Javascript</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-react-original colored' />
					<span>React</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					<span>Redux</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						className='devicon-npm-original-wordmark colored'
					/>
					
					<span>Npm</span>
				</div>
				
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i class="devicon-materialui-plain colored"></i>
					<span>Material Ui</span>
				</div>
				</div>
				<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			    >
				Back End
			   </h1>
			<div className={styles.borderBottom} />
				<div className={styles.container}>
				
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#509941' }}
						className='devicon-nodejs-plain'
					/>
					<span>Node</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-express-original' />
					<span>Express</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-mongodb-plain colored' />
					<span>MongoDB</span>
				</div>
								
			</div>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			    >
				Data structures and Algorithms
			   </h1>
			   <div className={styles.borderBottom} /> <div className={styles.container}>
			<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<a href="https://www.hackerrank.com/maheshguptha49" target="_blank" rel="noreferrer">
					<img src="https://media-exp1.licdn.com/dms/image/sync/C4E27AQGxwQmQ5JvTyQ/articleshare-shrink_800/0/1630920305735?e=1631797200&v=beta&t=HmstUJr9Efi9Gb85gUv5dllp9g9DzLfKR1m6RIDguO4" alt=""  width="100px"
					style={{borderRadius:"90%"}}  />
					<span style={{fontSize:"70%"}}>Hacker rank</span>
					<span style={{fontSize:"70%"}}> 5 Star badge</span>
					{/* <span>Click me</span> */}
					</a>
				</div>
			   </div>
			

		</div>
	);
};

export default TechStacks;
