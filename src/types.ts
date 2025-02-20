export interface CountryData {
	emoji: string;
	country: string;
}

export interface CityData {
	cityName: string;
	country: string;
	emoji: string;
	date: string;
	notes?: string;
	position: {
		lat: number;
		lng: number;
	};
	id: number;
}
