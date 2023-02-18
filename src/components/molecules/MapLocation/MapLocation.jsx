import { MapContainer, TileLayer } from "react-leaflet";
import { DraggableMarker } from "../../atoms/DraggableMarker/DraggableMarker";
import { ResetCenterView } from "./ResetCenterView/ResetCenterView";

import style from "./MapLocation.module.css";
import "leaflet/dist/leaflet.css";

export const MapLocation = ({
	coordinatesCenter,
	markerSelect,
	handleChangeCoordinates,
	isDraggable,
	isEdit,
	handleResetCoordinates,

	// data,
	// isEditActive,
	// handleIsEditActive,
	// functionToDispatch,
}) => {
	return (
		<div className={style.mapContainer}>
			<div className={`${style.viewMapContainer} ${isEdit && style.viewMapContainerEdit}`}>
				<MapContainer
					center={coordinatesCenter}
					zoom={13}
					scrollWheelZoom={false}
					dragging={isEdit}
				>
					{/* <TileLayer
						attribution='<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/> */}
					<TileLayer
						attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
						url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=fIuobe6SaeD00VVKZPb4'
					/>

					{markerSelect && (
						<DraggableMarker
							coordinates={markerSelect}
							handleChangeCoordinates={handleChangeCoordinates}
							isDraggable={isDraggable}
						/>
					)}
					<ResetCenterView coordinatesCenter={coordinatesCenter} />
				</MapContainer>
			</div>

			{isEdit && (
				<button className={style.buttonToResetMap} onClick={handleResetCoordinates}>
					Eliminar ubicación
				</button>
			)}
		</div>
	);
};

MapLocation.defaultProps = {
	isEdit: false,
};
