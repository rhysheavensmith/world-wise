import styles from './CityList.module.css';
import CityItem from './CityItem';
import Spinner from './Spinner';
import Message from './Message';
import { CityData } from '../types';

interface CityListProps {
	cities: Array<CityData>;
	loading: boolean;
	error: string;
}

const CityList: React.FC<CityListProps> = ({ cities, loading, error }) => {
	if (loading) return <Spinner />;
	if (cities.length === 0) return <Message message='No cities to display' />;
	if (error) return <Message message={error} />;
	return (
		<ul className={styles.cityList}>
			{cities.map((city) => {
				return <CityItem key={city.cityName} city={city} />;
			})}
		</ul>
	);
};

export default CityList;
