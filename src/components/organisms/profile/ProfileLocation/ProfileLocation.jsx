import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SectionProfileContainer } from "../../../atoms/profile/SectionProfileContainer/SectionProfileContainer";
import { TitleProfile } from "../../../atoms/profile/TitleProfile/TitleProfile";
import { MapGeolocation } from "../../MapGeolocation/MapGeolocation";

export const ProfileLocation = ({ data, isEdit, functionToDispatch }) => {
	const { location } = useSelector((state) => state.dashboard?.perfil);
	// const [coordinates, setCoordinates] = useState(null);

	// useEffect(() => {
	// 	if (location.lat && location.lng) {
	// 		setCoordinates([location.lat, location.lng]);
	// 	}
	// }, [location]);
	return (
		<>
			<SectionProfileContainer>
				<TitleProfile title='Ubicación' />
				<MapGeolocation
					location={location}
					isEdit={isEdit}
					functionToDispatch={functionToDispatch}
					data={data}
				/>
			</SectionProfileContainer>
		</>
	);
};

//coordinates, isEdit, data, functionToDispatch
