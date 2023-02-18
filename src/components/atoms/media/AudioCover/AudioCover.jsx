import style from "./AudioCover.module.css";

export const AudioCover = ({ img, audio }) => {
	return (
		<div className={style.coverMediaContainer}>
			<img src={img} alt='imagen-banner' className={style.coverMediaImg} />
			<audio src={audio} controls className={style.coverMediaAudio}/>
		</div>
	);
};
