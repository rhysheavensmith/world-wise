import styles from './CityList.module.css';

interface CityListProps {}

const CityList: React.FC<CityListProps> = () => {
	return (
		<ul className={styles.cityList}>
			<li>City 1</li>
		</ul>
	);
};

export default CityList;
