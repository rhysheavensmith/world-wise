import { CityData, CountryData } from '../types';
import styles from './CountryList.module.css';

import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';

interface CountryListProps {
	cities: Array<CityData>;
	loading: boolean;
	error: string;
}

const CityList: React.FC<CountryListProps> = ({ cities, loading, error }) => {
	if (loading) return <Spinner />;
	if (cities.length === 0) return <Message message='No cities to display' />;
	if (error) return <Message message={error} />;

	// Create a map to store unique countries
	const sortedCountries = new Map<string, CountryData>();
	// Iterate over the cities and add each country to the map
	cities.forEach(({ country, emoji }) => {
		if (!sortedCountries.has(country)) {
			sortedCountries.set(country, { country, emoji });
		}
	});

	return (
		<ul className={styles.countryList}>
			{Array.from(sortedCountries.values()).map((country) => {
				return <CountryItem key={country.country} country={country} />;
			})}
		</ul>
	);
};

export default CityList;
