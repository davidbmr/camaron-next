import { useState } from "react";

export const useShare = () => {
	const [isActive, setIsActive] = useState(true);

	const onActive = () => {
		setIsActive(!isActive);
	};

	return {
		isActive,
		onActive,
	};
};
