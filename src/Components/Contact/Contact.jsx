import { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Contact.module.css';

const Contact = () => {
	const { newTheme } =useContext(ThemeContext);
	return (
		<footer
			className={styles.footer}
			id='contact'
		>
			<div className={styles.container}>
				<h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.paragraph}
				>
					"/*Add a tagline like I am currently looking for a job*/"
				</p>
				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.contactOptions}
				>
					<a
						href='tel:6281753294'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fas fa-phone-alt' />
					</a>
					<a
						href='mailto: maheshguptha49@gmail.com'
						aria-label='email'
						target='_blank'
						rel='noreferrer'
					>
						<i className='far fa-envelope'></i>
					</a>
					<a
						href='https://twitter.com/Maheshg18146013'
						aria-label='Twitter'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href='https://github.com/maheshguptha49'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-github' />
					</a>

					<a
						href='https://www.linkedin.com/in/mahesh-guptha-966720211/'
						aria-label='Linkedin'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-linkedin-in' />
					</a>
				</div>
			</div>
			<div
				style={{ background: `${newTheme.line}` }}
				className={styles.line}
			/>
			<div
				style={{ color: `${newTheme.para}` }}
				className={styles.copyright}
			>
				Designed and build by Mahesh Guptha, 2021 All rights
				reserved.
			</div>
		</footer>
	);
};

export default Contact;
