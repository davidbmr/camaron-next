import { useState } from "react";

// const NOMINATIM_BASE_URL_REVERSE = "https://nominatim.openstreetmap.org/reverse?";

const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";
const apiKey = "AIzaSyAFzpABP2dgo80pE-l8Ra1YcukdwiZK0gQ";

export const useChangeLocation = (coordinates) => {
	const [coordinatesCenter, setCoordinatesCenter] = useState(
		coordinates ? coordinates : [9.93519056762257, -84.10321962368977]
	);
	const [markerSelect, setMarkerSelect] = useState(coordinates ? coordinates : null);
	const [geoAddress, setGeoAddress] = useState({});

	const [isDraggable, setIsDraggable] = useState(false);

	const handleClearGeoAddress = () => {
		setGeoAddress({});
	};

	const handleInitChangeCoordinates = (location) => {
		if (location) {
			setCoordinatesCenter(location);
			setMarkerSelect(location);
		}
	};

	const handleChangeCoordinates = (newLocation) => {
		if (!newLocation) {
			setMarkerSelect(null);
		}

		if (newLocation) {
			setMarkerSelect(newLocation);
			setCoordinatesCenter(newLocation);
			onGetAddress(newLocation);
		}
	};

	const handleIsDraggable = (value) => {
		setIsDraggable(value);
	};

	/** Geocodificacion reverse */

	// const onGetAddress = (newLocation) => {
	// 	// Search
	// 	const params = {
	// 		format: "json",
	// 		lat: newLocation[0],
	// 		lon: newLocation[1],
	// 		addressdetails: 1,
	// 		polygon_geojson: 0,
	// 	};
	// 	const queryString = new URLSearchParams(params).toString();
	// 	// console.log(queryString);

	// 	const requestOptions = {
	// 		method: "GET",
	// 		redirect: "follow",
	// 	};

	// 	fetch(`${NOMINATIM_BASE_URL_REVERSE}${queryString}`, requestOptions)
	// 		.then((response) => response.text())
	// 		.then((result) => {
	// 			// console.log(JSON.parse(result));
	// 			setGeoAddress(JSON.parse(result));
	// 		})
	// 		.catch((err) => console.log("err: ", err));
	// };

	const onGetAddress = (newLocation) => {
		let lat = newLocation[0];
		let lng = newLocation[1];
		const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
		fetch(url)
			.then((response) => response.json())
			.then((location) => {
				const place = location.results[0];
				const name = place.formatted_address;
				const moreInfo = place.address_components;

				setGeoAddress({ name: name, moreInfo: moreInfo });
			});
	};

	return {
		coordinatesCenter,
		markerSelect,
		handleInitChangeCoordinates,
		handleChangeCoordinates,
		isDraggable,
		handleIsDraggable,
		/** ---- GeocodingReverse ---- */
		geoAddress,
		handleClearGeoAddress,
	};
};
