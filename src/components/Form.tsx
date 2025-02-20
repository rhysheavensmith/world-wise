// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import Button from './Button';
import { useState } from 'react';
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';

// Convert country code (ISO 3166-1 Alpha-2) to flag emoji
export function convertToEmoji(countryCode: string): string {
	const codePoints = countryCode
		.toUpperCase()
		.split('')
		.map((char) => 127397 + char.charCodeAt(0));
	return String.fromCodePoint(...codePoints);
}

function Form() {
	// State management with explicit types
	const [cityName, setCityName] = useState<string>('');
	const [country, setCountry] = useState<string>('');
	const [date, setDate] = useState<string>(
		new Date().toISOString().split('T')[0]
	); // Store date as a string (YYYY-MM-DD)
	const [notes, setNotes] = useState<string>('');

	const navigate = useNavigate();

	const goBack = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	return (
		<form className={styles.form}>
			<div className={styles.row}>
				<label htmlFor='cityName'>City name</label>
				<input
					id='cityName'
					onChange={(e) => setCityName(e.target.value)}
					value={cityName}
				/>
				{/* <span className={styles.flag}>{convertToEmoji(country)}</span> */}
			</div>

			<div className={styles.row}>
				<label htmlFor='date'>When did you go to {cityName}?</label>
				<input
					id='date'
					type='date' // Set input type to 'date' for proper UI handling
					onChange={(e) => setDate(e.target.value)}
					value={date}
				/>
			</div>

			<div className={styles.row}>
				<label htmlFor='notes'>Notes about your trip to {cityName}</label>
				<textarea
					id='notes'
					onChange={(e) => setNotes(e.target.value)}
					value={notes}
				/>
			</div>

			<div className={styles.buttons}>
				<Button variant='primary' onClick={() => console.log('clicked')}>
					Add
				</Button>
				<Button variant='back' onClick={goBack}>
					&larr; Back
				</Button>
			</div>
		</form>
	);
}

export default Form;
