import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

import { formatRequestService } from "../../../../helpers/getCurrentDate";

import { CardInfoBar } from "../../../molecules/CardInfoBar/CardInfoBar";

import style from "./RequestServiceCard.module.css";

export const RequestServiceCard = ({ _id, title, user, date, location }) => {
	// const navigate = useNavigate();
	const [limitDate, setLimitDate] = useState(null);
	const [addressLocation, setAddressLocation] = useState("Sin ubicación");

	useEffect(() => {
		if (date) {
			const newDate = formatRequestService(date);
			setLimitDate(newDate);
		}
		if (!date) {
			setLimitDate("No hay fecha limite");
		}
	}, [date]);

	useEffect(() => {
		if (location.name) {
			let currentDistrictAddress = location?.address?.moreInfo[1]?.long_name;
			let currentDepartmentAddress = location?.address?.moreInfo[2]?.long_name;
			let currentCountryAddress = location?.address?.moreInfo[3]?.long_name;
			let currentAddress = `${currentDistrictAddress}, ${currentDepartmentAddress}, ${currentCountryAddress}`;

			setAddressLocation(currentAddress);
		}
	}, [location]);

	const handleNavigateRequestService = () => {
		// navigate(`/solicitud/servicio/${_id}`);
	};

	return (
		<div className={style.containerServiceCard} onClick={handleNavigateRequestService}>
			<div className={style.containerServiceCardLocation}>
				<p className={style.serviceCardLocation}>{limitDate}</p>
			</div>

			<div className={style.containerTitleRequest}>
				<p className={style.titleRequest}>{title}</p>
			</div>

			<div className={style.containerServiceCardInfo}>
				<CardInfoBar user={user} location={addressLocation} />
			</div>
		</div>
	);
};
