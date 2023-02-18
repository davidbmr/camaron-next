import style from "./ProfileImage.module.css";

export const ProfileImage = ({ img }) => {
	return (
		<div className={style.profileImageContainer}>
			{img && <img src={img} alt='' className={style.profileImage} referrerPolicy='no-referrer' />}
		</div>
	);
};