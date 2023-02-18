import { Edit } from "../../../../../assets/svg/Edit";
import { ProfileImg } from "../../../atoms/profile/ProfileImg/ProfileImg";
import style from "./InfoProfileImg.module.css";

export const InfoProfileImg = ({ img }) => {
	return (
		<div className={style.imgProfileContainer}>
			<ProfileImg img={img} />
		</div>
	);
};
