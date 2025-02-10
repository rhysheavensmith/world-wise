import styles from './CountryItem.module.css';
import { CountryData } from '../types';

// Define a type for the component props
interface CountryItemProps {
	country: CountryData;
}

// Use React.FC for better clarity
const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
	return (
		<li className={styles.countryItem}>
			<span>{country.emoji}</span>
			<span>{country.country}</span>
		</li>
	);
};

export default CountryItem;
