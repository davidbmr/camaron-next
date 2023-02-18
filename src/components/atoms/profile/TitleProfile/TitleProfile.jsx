import style from "./TitleProfile.module.css";

export const TitleProfile = ({ title }) => {
	return (
		<div className={style.titleProfileContainer}>
			<p className={style.titleText}>{title}</p>
		</div>
	);
};
