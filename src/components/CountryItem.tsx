import styles from './CountryItem.module.css';

// Define a type for the country data
interface CountryData {
	emoji: string;
	country: string;
}

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
