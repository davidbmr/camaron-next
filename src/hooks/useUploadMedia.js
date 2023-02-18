import { useState } from "react";
import { formatLocalMedia } from "../helpers/validateMediaCloudinary";

/** La herramienta que usamos es cloudinary */
export const useUploadMedia = () => {
	// const [media, setMedia] = useState({
	// 	url: "",
	// 	type: "",
	// 	handle: "",
	// });
	const [media, setMedia] = useState({});

	const [isUpload, setIsUpload] = useState(false);

	const handleOpenWidget = (type) => {
		setIsUpload(false);
		let myWidget = window.cloudinary.createUploadWidget(
			{
				cloudName: "druvsxm4x",
				uploadPreset: `camaron_${type}`,
				sources: ["local"],
				maxFiles: 1,
				maxImageFileSize: 10000000,
				maxVideoFileSize: 15000000,
				clientAllowedFormats: formatLocalMedia(type),
				multiple: false,
				autoMinimize: false,
				singleUploadAutoClose: false,
				// language: "es",
				// text: text,
			},
			(error, result) => {
				if (!error && result && result.event === "success") {
					// console.log("Done! Here is the image info: ", result.info);
					let mediaUpload = result.info;
					let preview = mediaUpload.secure_url;

					if (type === "video") {
						let arrPreview = preview.split(".");
						arrPreview.pop();
						arrPreview.push("jpg");
						preview = arrPreview.join(".");
					}
					if (type === "audio") {
						preview =
							"https://res.cloudinary.com/davidbmr/image/upload/v1662418857/Images/t3jmx0weigrecb40ufsx.jpg";
					}

					setMedia({
						url: mediaUpload.secure_url,
						type: type,
						handle: mediaUpload.public_id,
						preview: preview,
					});

					setIsUpload(true);
				}
			}
		);
		// open widget
		myWidget.open();
	};

	return {
		handleOpenWidget,
		media,
		isUpload,
	};
};
