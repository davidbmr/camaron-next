import { useState } from "react";

export const useServiceCategories = () => {
	const [currentCategories, setCurrentCategories] = useState([]);
	const [currentInput, setCurrentInput] = useState("");

	const handleChangeCurrentCategories = (value) => {
		setCurrentCategories(value);
	};

	const handleChangeInput = (e) => {
		setCurrentInput(e.target.value);
	};

	const handleKeyDownInput = (e) => {
		if (e.key === "Enter" && currentInput.length >= 2) {
			let newCategory = e.target.value.toLowerCase();

			if (currentCategories.includes(newCategory)) {
				setCurrentInput("");
				return;
			}

			setCurrentCategories((currentValue) => [...currentValue, newCategory]);
			setCurrentInput("");
		}

		if (e.key === "Backspace" && currentInput.length === 0 && currentCategories.length > 0) {
			let newCategories = [...currentCategories];
			newCategories.pop();
			setCurrentCategories(newCategories);
		}
	};

	const handleAddButton = () => {
		if (currentInput.length >= 2) {
			let newCategory = currentInput.toLowerCase();
			if (currentCategories.includes(newCategory)) {
				setCurrentInput("");
				return;
			}
			setCurrentCategories((currentValue) => [...currentValue, newCategory]);
			setCurrentInput("");
		}
	};

	return {
		currentCategories,
		currentInput,
		handleChangeCurrentCategories,
		handleChangeInput,
		handleKeyDownInput,
		handleAddButton,
	};
};
