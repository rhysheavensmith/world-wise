import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo';
import Button from './Button';
// import Button from './Button';

function PageNav() {
	return (
		<nav className={styles['nav']}>
			<Logo />
			<ul>
				<li>
					<NavLink to='/pricing'>Pricing</NavLink>
				</li>
				<li>
					<NavLink to='/product'>Product</NavLink>
				</li>
				<li>
					<NavLink to='/login'>
						<Button>Login</Button>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default PageNav;
