import { ProfileImage } from "../../atoms/images/ProfileImage/ProfileImage";
import style from "./CardInfoBar.module.css";

export const CardInfoBar = ({ user, location, handleNavigateToProfile }) => {
	return (
		<div className={style.infoServiceCardContainer} onClick={handleNavigateToProfile}>
			<div>
				<ProfileImage img={user?.profilePic} />
			</div>

			<div className={style.infoServiceCard}>
				<p className={style.infoService__name}>{user?.name}</p>
				<p className={style.infoService__location}>{location}</p>
			</div>
		</div>
	);
};

CardInfoBar.defaultProps = {
	canGoService: false,
};
