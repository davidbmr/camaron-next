import style from "./ImageCover.module.css";

export const ImageCover = ({ img }) => {
	return (
		<div className={style.bannerImgContainer}>
			<img src={img} alt='imagen-banner' className={style.bannerImg} />
		</div>
	);
};
