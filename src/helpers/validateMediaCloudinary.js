export const formatLocalMedia = (type) => {
	if (type === "imagen" || type === "profile") {
		return ["jpg", "webp", "jpeg", "png"];
	}
	if (type === "video") {
		return ["mp4", "mov", "avi"];
	}
	if (type === "audio") {
		return ["mp3", "mpeg"];
	}
	return null;
};
