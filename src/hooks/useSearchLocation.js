import { useState } from "react";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export const useSearchLocation = () => {
	const [searchData, setSearchData] = useState("");
	const [listPlace, setListPlace] = useState([]);
	const [locationSelect, setLocationSelect] = useState(null);

	const handleSearchButton = (e) => {
		e.preventDefault();
		// Search
		const params = {
			q: searchData,
			format: "json",
			addressdetails: 1,
			polygon_geojson: 0,
		};
		const queryString = new URLSearchParams(params).toString();
		const requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
			.then((response) => response.text())
			.then((result) => {
				// console.log(JSON.parse(result));
				setListPlace(JSON.parse(result));
			})
			.catch((err) => console.log("err: ", err));
	};

	const handleChangeData = (e) => {
		setSearchData(e.target.value);
	};

	const handleChangeLocationSelect = (value) => {
		if (value) {
			const latValue = value.lat;
			const lonValue = value.lon;
			const coordinatesValue = [latValue, lonValue];
			setLocationSelect(coordinatesValue);
		}
	};

	const clearSearchData = () => {
		setSearchData("");
	};

	return {
		searchData,
		handleSearchButton,
		handleChangeData,
		listPlace,
		locationSelect,
		handleChangeLocationSelect,
		clearSearchData,
	};
};
