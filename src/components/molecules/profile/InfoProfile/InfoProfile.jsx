import { Edit } from "../../../../../assets/svg/Edit";
import style from "./InfoProfile.module.css";

export const InfoProfile = ({
	title,
	icon,
	isEdit,
	editFunction,
	setDataEdit,
	dataName,
	dataTitle,
}) => {
	const handleDataEdit = () => {
		setDataEdit({
			name: dataName,
			title: dataTitle,
		});
		editFunction();
	};

	return (
		<div className={style.infoProfileContainer}>
			{icon && <div className={style.infoProfileIcon}>{icon}</div>}

			<p className={style.infoProfileTitle}>{title}</p>

			{isEdit && (
				<div className={style.infoProfileIconEdit} onClick={handleDataEdit}>
					<Edit />
				</div>
			)}
		</div>
	);
};

InfoProfile.defaultProps = {
	isEdit: false,
	dataName: "",
	dataTile: "",
};
