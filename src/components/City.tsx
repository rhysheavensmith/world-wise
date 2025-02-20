import styles from './City.module.css';
import { useParams, useSearchParams } from 'react-router-dom';

// Function to format the date safely
const formatDate = (dateString: string | null): string => {
	// Handle null/empty cases safely
	if (!dateString) return 'Invalid Date';
	const date = new Date(dateString);
	// Handle invalid date strings
	if (isNaN(date.getTime())) return 'Invalid Date';
	// Return the formatted date
	return new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		weekday: 'long',
	}).format(date);
};

// City data
// const city = {
// 	cityName: 'Auckland',
// 	emoji: '🌆',
// 	date: '2021-01-01',
// 	notes: 'I had a great time in Auckland',
// };

const City = () => {
	// const { cityName, emoji, date, notes } = city;
	const { id } = useParams<{ id: string }>();
	const [searchParams, setSearchParams] = useSearchParams();
	const lat = searchParams.get('lat');
	const lng = searchParams.get('lng');

	return (
		// <div className={styles.city}>
		// 	<div className={styles.row}>
		// 		<h6>City name</h6>
		// 		<h3>
		// 			<span>{emoji}</span> {cityName}
		// 		</h3>
		// 	</div>

		// 	<div className={styles.row}>
		// 		<h6>You went to {cityName} on</h6>
		// 		<p>{formatDate(date)}</p>
		// 	</div>

		// 	{notes && (
		// 		<div className={styles.row}>
		// 			<h6>Your notes</h6>
		// 			<p>{notes}</p>
		// 		</div>
		// 	)}

		// 	<div className={styles.row}>
		// 		<h6>Learn more</h6>
		// 		<a
		// 			href={`https://en.wikipedia.org/wiki/${cityName}`}
		// 			target='_blank'
		// 			rel='noreferrer'
		// 		>
		// 			Check out {cityName} on Wikipedia &rarr;
		// 		</a>
		// 	</div>

		// 	<div>
		// 		{/* Ensure ButtonBack is imported correctly */}
		// 		{/* <ButtonBack /> */}
		// 	</div>
		// </div>
		<>
			<h1>{id}</h1>
			<p>
				lat {lat} & lng {lng}
			</p>
		</>
	);
};

export default City;
