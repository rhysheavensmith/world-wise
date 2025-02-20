import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';
import { CityData } from '../types';

interface CityItemProps {
	city: CityData;
}

const formatDate = (dateString: string | null): string => {
	// Handle null/empty cases safely
	if (!dateString) return 'Invalid Date';
	const date = new Date(dateString);
	// Handle invalid date strings
	if (isNaN(date.getTime())) return 'Invalid Date';
	// Return the formatted date
	return new Intl.DateTimeFormat('nz', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}).format(date);
};

const CityItem: React.FC<CityItemProps> = ({ city }) => {
	const { cityName, emoji, date, id, position } = city;
	return (
		<li>
			<Link
				className={styles.cityItem}
				to={`${id}?lat=${position.lat}&lng=${position.lng}`}
			>
				<span className={styles.emoji}>{emoji}</span>
				<h2 className={styles.name}>{cityName}</h2>
				<time className={styles.date}>{formatDate(date)}</time>
				<button className={styles.deleteBtn}>&times;</button>
			</Link>
		</li>
	);
};

export default CityItem;
