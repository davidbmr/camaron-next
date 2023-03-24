import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { CardInfoBar } from "../../../molecules/CardInfoBar/CardInfoBar";

import style from "./ServiceCard.module.css";

export const ServiceCard = ({ _id, title, user, frontPage, media, location }) => {
	const router = useRouter();
	const [addressLocation, setAddressLocation] = useState("Sin ubicación");

	const handleNavigateService = () => {
		router.push(`/servicio/${_id}`);
	};

	useEffect(() => {
		if (location.name) {
			let currentDistrictAddress = location?.address?.moreInfo[1]?.long_name;
			let currentDepartmentAddress = location?.address?.moreInfo[2]?.long_name;
			let currentCountryAddress = location?.address?.moreInfo[3]?.long_name;
			let currentAddress = `${currentDistrictAddress}, ${currentDepartmentAddress}, ${currentCountryAddress}`;

			setAddressLocation(currentAddress);
		}
	}, [location]);

	return (
		<div
			className={style.containerServiceCard}
			style={{
				backgroundImage: `url(${media.length > 0 ? media[0].preview : frontPage})`,
			}}
			onClick={handleNavigateService}
		>
			<div className={style.serviceCard__title}>
				<p className={style.serviceCard__title__text}>{title}</p>
			</div>

			<div className={style.containerServiceCardInfo}>
				<CardInfoBar user={user} location={addressLocation} />
			</div>
		</div>
	);
};

ServiceCard.defaultProps = {
	frontPage: "",
};
