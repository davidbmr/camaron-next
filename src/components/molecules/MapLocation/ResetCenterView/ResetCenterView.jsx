import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const ResetCenterView = ({ coordinatesCenter }) => {
	const map = useMap();

	useEffect(() => {
		if (coordinatesCenter) {
			map.setView(L.latLng(coordinatesCenter[0], coordinatesCenter[1]), map.getZoom(), {
				animate: true,
			});
		}
	}, [coordinatesCenter]);

	return null;
};
