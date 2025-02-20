import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CityData } from './types';

import Homepage from './pages/HomePage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';

function App() {
	const [cities, setCities] = useState<CityData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		async function fetchCities(): Promise<void> {
			try {
				const response = await fetch('http://localhost:8000/cities', {
					signal,
				});
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data: Array<CityData> = await response.json();
				setCities(data);
				console.log(data);
			} catch (error) {
				if ((error as Error).name !== 'AbortError') {
					setError(error as Error);
				}
			} finally {
				setLoading(false);
			}
		}
		fetchCities();
		return () => {
			controller.abort();
		};
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route index path='/' element={<Homepage />} />
				<Route path='/product' element={<Product />} />
				<Route path='/pricing' element={<Pricing />} />
				<Route path='*' element={<PageNotFound />} />
				<Route path='/app' element={<AppLayout />}>
					<Route index element={<Navigate to='cities' replace />} />
					<Route
						path='cities'
						element={
							<CityList
								cities={cities}
								loading={loading}
								error={error ? error.message : ''}
							/>
						}
					/>
					<Route path='cities/:id' element={<City />} />
					<Route
						path='countries'
						element={
							<CountryList
								cities={cities}
								loading={loading}
								error={error ? error.message : ''}
							/>
						}
					/>
					<Route path='form' element={<Form />} />
				</Route>

				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
