import styles from './SideBar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';
import { Outlet } from 'react-router-dom';

// interface SideBarProps {}

const SideBar = () => {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<AppNav />

			{/* Here we will render the cities or the country component with the default going to the cities */}
			<Outlet />
			<footer className={styles.footer}>
				<p>&copy; Copyright {new Date().getFullYear()} Worldwise</p>
			</footer>
		</div>
	);
};

export default SideBar;
