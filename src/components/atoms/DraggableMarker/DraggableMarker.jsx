import { useMemo, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerCamaron from '../../../../assets/images/markerCamaron.png'

import Leaflet from "leaflet";
const icon = Leaflet.icon({
	iconUrl: markerCamaron,
	iconSize: [35, 51], // size of the icon
	iconAnchor: [19, 46], //changed marker icon position
	popupAnchor: [0, -36], //changed popup position
});

export const DraggableMarker = ({ coordinates, handleChangeCoordinates, isDraggable }) => {
	const markerRef = useRef(null);

	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current;
				if (marker != null) {
					const latlng = marker.getLatLng();
					handleChangeCoordinates([latlng.lat, latlng.lng]);
				}
			},
		}),
		[]
	);

	return (
		<Marker
			draggable={isDraggable}
			eventHandlers={eventHandlers}
			position={coordinates}
			ref={markerRef}
			icon={icon}
		>
			{/* <Popup minWidth={90}>
				<p>Hola</p>
			</Popup> */}
		</Marker>
	);
};
