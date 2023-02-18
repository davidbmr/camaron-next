import { BsFillPlayFill, BsEyeFill } from "react-icons/bs";
import { MdMusicNote } from "react-icons/md";
import { ResetEditButton } from "../../atoms/buttons/ResetEditButton/ResetEditButton";
import style from "./MediaPreview.module.css";

export const MediaPreview = ({ media, onClick }) => {
	return (
		<div className={style.mediaPreviewContainer}>
			{/* <img src={media.url} alt='imagen-preview' /> */}
			{media.type === "video" && (
				<div className={style.mediaPreviewIcon}>
					<BsFillPlayFill />
				</div>
			)}
			{media.type === "imagen" && (
				<div className={style.mediaPreviewIcon}>
					<BsEyeFill />
				</div>
			)}
			{media.type === "audio" && (
				<div className={style.mediaPreviewIcon}>
					<MdMusicNote />
				</div>
			)}

			<img className={style.mediaPreview} src={media.preview} alt='imagen-preview' />

			<div className={style.resetEditButton}>
				<ResetEditButton onClick={onClick} />
			</div>
		</div>
	);
};
