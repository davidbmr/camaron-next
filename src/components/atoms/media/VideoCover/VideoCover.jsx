import style from "./VideoCover.module.css";

export const VideoCover = ({ preview, video }) => {
	return (
		<div className={style.coverMediaContainer}>
			{/* <div className={style.coverTextButton}>
				<p>Visualizar video</p>
			</div> */}
			<video className={style.coverMedia} src={video} alt='' controls />
		</div>
	);
};
