import { useRef } from "react";
import { useState, useEffect, useLayoutEffect } from "react";

import { useChangeLocation } from "../../../hooks/useChangeLocation";
import { useEdit } from "../../../hooks/useEdit";
import { TitleProfile } from "../../atoms/profile/TitleProfile/TitleProfile";
import { MapLocation } from "../../molecules/MapLocation/MapLocation";
import { SearchBarLocation } from "../../molecules/SearchBarLocation/SearchBarLocation";
import { SearchBarLocationGoogleMaps } from "../../molecules/SearchBarLocationGoogleMaps/SearchBarLocationGoogleMaps";

import style from "./MapGeolocation.module.css";

export const MapGeolocation = ({ isEdit, data, setNewData }) => {
	const searchRef = useRef();

	const {
		coordinatesCenter,
		markerSelect,
		handleInitChangeCoordinates,
		handleChangeCoordinates,
		handleIsDraggable,
		geoAddress,
		handleClearGeoAddress,
	} = useChangeLocation(null);

	useLayoutEffect(() => {
		if (data?.location?.lat && data?.location?.lng) {
			if (markerSelect?.length === 2) return;
			handleInitChangeCoordinates([data.location.lat, data.location.lng]);
		}
	}, [data]);

	useEffect(() => {
		// console.log(markerSelect);
		if (markerSelect?.length > 1 && geoAddress?.name) {
			if (
				!markerSelect.includes(data?.location?.lat) ||
				!markerSelect.includes(data?.location?.lng)
			) {
				let location = {
					lat: markerSelect[0],
					lng: markerSelect[1],
					name: geoAddress.name,
					address: { ...geoAddress },
				};
				// console.log(location);
				setNewData({
					...data,
					location,
				});
				handleClearGeoAddress();
			}
		}
	}, [markerSelect, geoAddress]);

	const handleResetCoordinates = () => {
		handleChangeCoordinates(null);
		setNewData({ ...data, location: { lat: "", lng: "", name: "", address: {} } });
	};

	return (
		<>
			<TitleProfile title='Ubicación' />
			<div className={style.mapGeolocationContainer}>
				{isEdit && (
					// <SearchBarLocation
					// 	handleChangeCoordinates={handleChangeCoordinates}
					// 	searchRef={searchRef}
					// />
					<SearchBarLocationGoogleMaps
						searchRef={searchRef}
						handleChangeCoordinates={handleChangeCoordinates}
					/>
				)}
				<MapLocation
					coordinatesCenter={coordinatesCenter}
					markerSelect={markerSelect}
					handleChangeCoordinates={handleChangeCoordinates}
					isDraggable={isEdit}
					isEdit={isEdit}
					handleResetCoordinates={handleResetCoordinates}
					// data={data}
					// isEditActive={isEditActive}
					// handleIsEditActive={handleIsEditActive}
					// functionToDispatch={functionToDispatch}
				/>
			</div>
		</>
	);
};

MapGeolocation.defaultProps = {
	setNewData: () => {
		return;
	},
};
