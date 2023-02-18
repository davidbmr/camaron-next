import style from "./ProfileRequestService.module.css";

export const ProfileRequestService = ({ id, title, handleNavigate }) => {
	return (
		<div className={style.infoServiceProfileContainer} onClick={() => handleNavigate(id)}>
			<p className={style.profileServiceTitle}>{title}</p>
		</div>
	);
};
