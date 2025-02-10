import styles from './Map.module.css';

interface MapProps {}

const Map: React.FC<MapProps> = () => {
	return <div className={styles.mapContainer}>map</div>;
};

export default Map;
