import { useEffect } from "react";
import { useUploadMedia } from "../../../../hooks/useUploadMedia";

import logo from "../../../../../assets/favicon.png";
import style from "./ProfileImg.module.css";

export const ProfileImg = ({ img, isEdit, setNewData }) => {
	// ---- Custom hook para activar el widget de cloudinary y subirlo a su infraestructura
	const { handleOpenWidget, media, isUpload } = useUploadMedia();

	// ---- Si se sube una imagen, esta se actualiza en los datos
	useEffect(() => {
		if (isUpload) {
			setNewData((current) => ({ ...current, profilePic: media.url }));
		}
	}, [isUpload]);

	return (
		<div className={style.profileImgContainer}>
			<img
				className={`${style.profileImg} ${isEdit && style.editProfileImg}`}
				src={img && img}
				alt='imagen-de-perfil'
				referrerPolicy='no-referrer'
				onClick={isEdit ? () => handleOpenWidget("profile") : null}
			/>
		</div>
	);
};

ProfileImg.defaultProps = {
	img: logo,
};
