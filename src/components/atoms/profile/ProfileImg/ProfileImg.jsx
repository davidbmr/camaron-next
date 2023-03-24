import Image from "next/image";
import { useEffect } from "react";
import { useUploadMedia } from "../../../../hooks/useUploadMedia";

// import logo from "../../../../../assets/favicon.png";
import style from "./ProfileImg.module.css";

export const ProfileImg = ({ img, isEdit, setNewData }) => {
	// ---- Custom hook para activar el widget de cloudinary y subirlo a su infraestructura
	const { handleOpenWidget, media, isUpload } = useUploadMedia();
	console.log(img);

	// ---- Si se sube una imagen, esta se actualiza en los datos
	useEffect(() => {
		if (isUpload) {
			setNewData((current) => ({ ...current, profilePic: media.url }));
		}
	}, [isUpload]);

	return (
		<div className={style.profileImgContainer}>
			<Image
				className={`${style.profileImg} ${isEdit && style.editProfileImg}`}
				height='80'
				width='80'
				src={
					"https://res.cloudinary.com/druvsxm4x/image/upload/v1666209801/profile/i9jbz592v8s6nnudj9yl.jpg"
				}
				// src={img ? img : "/assets/images/logo-icon-c.png"}
				alt='icono camaron'
				referrerPolicy='no-referrer'
				onClick={isEdit ? () => handleOpenWidget("profile") : null}
			/>
			{/* <img
				className={`${style.profileImg} ${isEdit && style.editProfileImg}`}
				src={img && img}
				alt='imagen-de-perfil'
				onClick={isEdit ? () => handleOpenWidget("profile") : null}
			/> */}
		</div>
	);
};

// ProfileImg.defaultProps = {
// 	img: logo,
// };
