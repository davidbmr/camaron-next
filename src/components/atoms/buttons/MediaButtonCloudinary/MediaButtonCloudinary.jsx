import { useState } from "react";
import { useEffect } from "react";
import { useUploadMedia } from "../../../../hooks/useUploadMedia";
import style from "./MediaButtonCloudinary.module.css";

export const MediaButtonCloudinary = ({ type, setNewData, data }) => {
	const { handleOpenWidget, media, isUpload } = useUploadMedia();
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		if (isUpload) {
			setNewData((current) => ({ ...current, media: [...current.media, media] }));
		}
	}, [isUpload]);

	useEffect(() => {
		if (data?.media?.length === 10) {
			console.log("set true: ", data.media);
			setIsDisabled(true);
		}
		if (isDisabled && data?.media?.length < 10) {
			console.log("set false: ", data.media);
			setIsDisabled(false);
		}
	}, [data.media]);

	return (
		<>
			<button
				className={style.mediaButton}
				onClick={() => handleOpenWidget(type)}
				disabled={isDisabled}
			>
				Haz click para seleccionar un archivo de <span className={style.textBold}>{type}</span>{" "}
				desde tu dispositivo
			</button>
		</>
	);
};
