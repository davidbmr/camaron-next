import { useState } from "react";

export const useEdit = () => {
	const [isEditActive, setIsEditActive] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const handleIsEditActive = () => {
		setIsEditActive(!isEditActive);
		setIsDisabled(!isDisabled);
	};

	return { isEditActive, handleIsEditActive, isDisabled };
};

/** OBSOLETO - BORRAR */
