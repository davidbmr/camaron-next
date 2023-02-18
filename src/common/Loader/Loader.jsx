import Image from "next/image";
import React from "react";

import style from "./Loader.module.css";

export const Loader = () => {
	return (
		<div className={style.loaderContainer}>
			<Image
				className={style.loaderImg}
				width='50'
				height='50'
				src={"/assets/favicon.png"}
				alt='loader'
			/>
		</div>
	);
};
