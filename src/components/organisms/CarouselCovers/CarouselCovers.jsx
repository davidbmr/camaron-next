import style from "./CarouselCovers.module.css";
import Carousel from "nuka-carousel";
import { VideoCover } from "../../atoms/media/VideoCover/VideoCover";
import { AudioCover } from "../../atoms/media/AudioCover/AudioCover";
import { ImageCover } from "../../atoms/media/ImageCover/ImageCover";

export const CarouselCovers = ({ media }) => {
	let controlsConfigApi = {
		pagingDotsStyle: {
			fill: "#333",
			position: "absolute",
			fontSize: "30px",
		},
		nextButtonStyle: {
			display: "none",
		},
		prevButtonStyle: {
			display: "none",
		},
		pagingDotsContainerClassName: "dotsContainer",
	};

	return (
		<div className={style.carouselContainer}>
			<Carousel
				defaultControlsConfig={controlsConfigApi}
				style={{ borderRadius: "25px", width: "100%", height: "100%"}}
			>
				{media &&
					media.map((element) => {
						return (
							<div key={element.handle} className={style.carouselCoversContainer}>
								{element.type === "video" && (
									<VideoCover img={element.preview} video={element.url} />
								)}
								{element.type === "audio" && (
									<AudioCover img={element.preview} audio={element.url} />
								)}
								{element.type === "imagen" && <ImageCover img={element.preview} />}
							</div>
						);
					})}
			</Carousel>
		</div>
	);
};

// <img
// 	className={`${style.img} ${style.eventsNone}`}
// 	src={element.url}
// 	alt=''
// 	key={element.handle}
// />
