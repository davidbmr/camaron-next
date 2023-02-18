import style from "./InformationText.module.css";

export const InformationText = ({ title }) => {
	return (
		<div className={style.informationTextContainer}>
			<p className={style.informationText}>{title}</p>
		</div>
	);
};
