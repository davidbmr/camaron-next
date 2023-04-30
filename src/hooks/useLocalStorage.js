import React, {useState, useEffect} from "react";

export const useLocalStorage = (itemName, initialValue) => {
	const [item, setItem] = useState(initialValue);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const localStorageItem = localStorage.getItem(itemName);
		let parsedItem;

		if (!localStorageItem) {
			localStorage.setItem(itemName, JSON.stringify(initialValue));
			parsedItem = initialValue;
		} else {
			parsedItem = JSON.parse(localStorageItem);
		}
		setLoading(false);
		setItem(parsedItem);
	}, []);

	const saveItem = (newItem) => {
		const stringifiedItem = JSON.stringify(newItem);
		localStorage.setItem(itemName, stringifiedItem);
		setItem(newItem);
	};

	return [item, saveItem, loading];
};
