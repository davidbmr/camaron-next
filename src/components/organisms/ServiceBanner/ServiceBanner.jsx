import { ImageCover } from "../../atoms/media/ImageCover/ImageCover";
import { CardInfoBar } from "../../molecules/CardInfoBar/CardInfoBar";

import style from "./ServiceBanner.module.css";

export const ServiceBanner = ({ img, user }) => {
	return (
		<div className={style.serviceBannerContainer}>
			<ImageCover img={img} />
			<div className={style.cardInfoBarContainer}>
				<CardInfoBar user={user} />
			</div>
		</div>
	);
};
