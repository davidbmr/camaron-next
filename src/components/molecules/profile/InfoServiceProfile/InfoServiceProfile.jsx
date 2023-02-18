import style from "./InfoServiceProfile.module.css";

export const InfoServiceProfile = ({ id, title, img, handleNavigate }) => {
	return (
		<div className={style.infoServiceProfileContainer} onClick={() => handleNavigate(id)}>
			<div className={style.profileServiceImgContainer}>
				<img className={style.profileServiceImg} src={img} alt='img-servicio' />
			</div>

			<p className={style.profileServiceTitle}>{title}</p>
		</div>
	);
};
