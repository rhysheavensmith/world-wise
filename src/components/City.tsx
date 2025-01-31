import styles from './City.module.css';

// Type for city data
interface CityData {
	cityName: string;
	emoji: string;
	date: string; // Keep as string since it comes from an API
	notes?: string; // Optional because notes might not always be present
}

// Function to format the date safely
const formatDate = (dateString: string | null): string => {
	if (!dateString) return 'Invalid Date'; // Handle null/empty cases safely

	const date = new Date(dateString);
	if (isNaN(date.getTime())) return 'Invalid Date'; // Handle invalid date strings

	return new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		weekday: 'long',
	}).format(date);
};

function City() {
	// TEMP DATA
	const currentCity: CityData = {
		cityName: 'Lisbon',
		emoji: '🇵🇹',
		date: '2027-10-31T15:59:59.138Z',
		notes: 'My favorite city so far!',
	};

	const { cityName, emoji, date, notes } = currentCity;

	return (
		<div className={styles.city}>
			<div className={styles.row}>
				<h6>City name</h6>
				<h3>
					<span>{emoji}</span> {cityName}
				</h3>
			</div>

			<div className={styles.row}>
				<h6>You went to {cityName} on</h6>
				<p>{formatDate(date)}</p>
			</div>

			{notes && (
				<div className={styles.row}>
					<h6>Your notes</h6>
					<p>{notes}</p>
				</div>
			)}

			<div className={styles.row}>
				<h6>Learn more</h6>
				<a
					href={`https://en.wikipedia.org/wiki/${cityName}`}
					target='_blank'
					rel='noreferrer'
				>
					Check out {cityName} on Wikipedia &rarr;
				</a>
			</div>

			<div>
				{/* Ensure ButtonBack is imported correctly */}
				{/* <ButtonBack /> */}
			</div>
		</div>
	);
}

export default City;
