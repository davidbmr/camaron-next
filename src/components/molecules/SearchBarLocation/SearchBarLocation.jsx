import { useState } from "react";
import { useEffect } from "react";
import { useSearchLocation } from "../../../hooks/useSearchLocation";
import style from "./SearchBarLocation.module.css";

export const SearchBarLocation = ({ handleChangeCoordinates, searchRef }) => {
	const {
		searchData,
		handleChangeData,
		handleSearchButton,
		locationSelect,
		listPlace,
		handleChangeLocationSelect,
		clearSearchData,
	} = useSearchLocation();

	const [searchActive, setSearchActive] = useState(false);

	useEffect(() => {
		if (locationSelect) {
			handleChangeCoordinates(locationSelect);
		}
	}, [locationSelect]);

	useEffect(() => {
		if (listPlace.length) {
			setSearchActive(true);
		}
	}, [listPlace]);

	const handleChangeLocation = (place) => {
		handleChangeLocationSelect(place);
		setSearchActive(false);
		// clearSearchData();
	};

	return (
		<div className={style.searchBarContainer}>
			<form className={`${style.searchBarFormContainer} ${searchActive && style.searchBarActive}`}>
				<input
					ref={searchRef}
					className={style.searchBar}
					type='text'
					placeholder='Ingresa tu ubicación'
					autoComplete='off'
					value={searchData}
					onChange={handleChangeData}
				/>
				<button className={style.searchIconButton} onClick={handleSearchButton}></button>
			</form>

			{searchActive && (
				<div className={style.listPlaceContainer}>
					{listPlace.map((place) => (
						<p
							key={place.place_id}
							className={style.listPlace}
							onClick={() => handleChangeLocation(place)}
						>
							{place.display_name}
						</p>
					))}
				</div>
			)}
		</div>
	);
};
