import { usePlacesWidget } from "react-google-autocomplete";

import style from "./SearchBarLocationGoogleMaps.module.css";

export const SearchBarLocationGoogleMaps = ({ handleChangeCoordinates }) => {
	const { ref, autocompleteRef } = usePlacesWidget({
		apiKey: "AIzaSyAFzpABP2dgo80pE-l8Ra1YcukdwiZK0gQ",
		onPlaceSelected: (place) => {
			if (!place.geometry) {
				return;
			}
			let latitude = place.geometry.location.lat();
			let longitude = place.geometry.location.lng();
			if (latitude && longitude) {
				handleChangeCoordinates([latitude, longitude]);
			}
		},
	});

	return (
		<div className={style.searchBarContainer}>
			<form className={style.searchBarFormContainer} onSubmit={(e) => e.preventDefault()}>
				{/* <button className={style.searchIconButton} onClick={(e) => e.preventDefault()}></button> */}
				<input
					ref={ref}
					className={style.searchBar}
					type='text'
					placeholder='Ingresa tu ubicación'
				/>
			</form>
		</div>
	);
};
