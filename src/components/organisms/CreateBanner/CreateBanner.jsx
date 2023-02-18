import { useState } from "react";
import { MediaButtonCloudinary } from "../../atoms/buttons/MediaButtonCloudinary/MediaButtonCloudinary";
import { UploadedMediaPreview } from "../../molecules/UploadedMediaPreview/UploadedMediaPreview";
import style from "./CreateBanner.module.css";

const media = ["video", "imagen", "audio"];

export const CreateBanner = ({ data, setNewData }) => {
	const [mediaType, setMediaType] = useState(null);

	const handleChangeTypeMedia = (e) => {
		mediaType === e.target.name ? setMediaType(null) : setMediaType(e.target.name);
	};

	return (
		<div className={style.createBannerContainer}>
			{data?.media && <UploadedMediaPreview media={data.media} setNewData={setNewData} />}

			{mediaType && <MediaButtonCloudinary type={mediaType} setNewData={setNewData} data={data} />}

			<p className={style.titleCreateBanner}>Crear Portada</p>

			<div className={style.buttonsContainer}>
				{media &&
					media.map((media) => (
						<button
							key={media}
							className={`${style.optionButton} ${mediaType === media && style.optionButtonActive}`}
							name={media}
							onClick={handleChangeTypeMedia}
						>
							{media}
						</button>
					))}
			</div>

			<p className={style.textCreateBanner}>
				Pueden ser hasta 10 contenidos, imagenes videos, audios y links.
			</p>
			<p className={style.textCreateBanner}>
				El peso maximo de los archivos es de 10MB si el peso es mayor a este numero te recomendamos
				utilizar enlaces externos.
			</p>
		</div>
	);
};
