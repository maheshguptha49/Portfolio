import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Navbar.module.css';

const barStyle = {
	bar1: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(45deg)',
	},
	bar2: {
		position: 'absolute',
		left: '-2px',
	},
	bar3: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(-45deg)',
	},
};

const Navbar = () => {
	// const [preScrollPos, setPreScrollPos] = useState(
	// 	window.pageYOffset,
	// );
	const navRef = useRef();

	const { newTheme, mode, handleMode, open, handleMenu } =
		useContext(ThemeContext);

	// window.onscroll = () => {
	// 	let currentScrollPos = window.pageYOffset;
	// 	if (preScrollPos > currentScrollPos) {
	// 		navRef.current.style.top = '0';
	// 	} else {
	// 		navRef.current.style.top = '-80px';
	// 	}
	// 	setPreScrollPos(currentScrollPos);
	// };

	return (
		<nav
			ref={navRef}
			className={styles.navContainer}
			style={{
				background: `${newTheme.background}`,
				boxShadow: `3px 3px 10px ${newTheme.line}`,
			}}
		>
			<div className={styles.navbar}>
				<a href="https://portfolio-lilac-sigma.vercel.app/">
					<div className={styles.logo}>
						<img
							src='https://i.pinimg.com/originals/8d/2d/1c/8d2d1c5e0ee9e5141f1fc51567dba572.png'
							alt='Logo'
						/>
					</div>
				</a>

				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.links}
				>
					<a href='#home'>Home</a>
					<a href='#about'>About</a>
					<a href="#techstacks">Skills</a>
					<a href='#projects'>Projects</a>

					<a href='#contact'>Contact</a>
				</div>
				<button
					style={{ color: `${newTheme.title}` }}
					className={styles.modeButton}
					onClick={handleMode}
				>
					{mode === 'light' ? (
						<i class="fas fa-lightbulb"></i>
						) : (
							<i class="far fa-lightbulb"></i>
					)}
				</button>

				<div onClick={handleMenu} className={styles.bars}>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar1
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar2
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar3
						}
					></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
