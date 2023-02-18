import { useState } from "react";

export const useFooterMenu = () => {
	const [isMenuActive, setIsMenuActive] = useState({
		settingsMenu: false,
		creationMenu: false,
		profileMenu: false,
		searchMenu: false,
	});

	const handleMenuActive = (typeMenu) => {
		//---- SettingsMenu
		if (typeMenu === "settingsMenu") {
			if (isMenuActive.settingsMenu) {
				setIsMenuActive({
					settingsMenu: false,
					creationMenu: false,
					profileMenu: false,
					searchMenu: false,
				});
			} else {
				setIsMenuActive({
					settingsMenu: true,
					creationMenu: false,
					profileMenu: false,
					searchMenu: false,
				});
			}
		}
		//---- CreationMenu
		if (typeMenu === "creationMenu") {
			if (isMenuActive.creationMenu) {
				setIsMenuActive({
					settingsMenu: false,
					creationMenu: false,
					profileMenu: false,
					searchMenu: false,
				});
			} else {
				setIsMenuActive({
					settingsMenu: false,
					creationMenu: true,
					profileMenu: false,
					searchMenu: false,
				});
			}
		}
		//---- ProfileMenu
		if (typeMenu === "profileMenu") {
			if (isMenuActive.profileMenu) {
				setIsMenuActive({
					settingsMenu: false,
					creationMenu: false,
					profileMenu: false,
					searchMenu: false,
				});
			} else {
				setIsMenuActive({
					settingsMenu: false,
					creationMenu: false,
					profileMenu: true,
					searchMenu: false,
				});
			}
		}
		//---- SearchMenu
		if (typeMenu === "searchMenu") {
			if (isMenuActive.searchMenu) {
				setIsMenuActive({
					settingsMenu: false,
					creationMenu: false,
					profileMenu: false,
					searchMenu: false,
				});
			} else {
				setIsMenuActive({
					settingsMenu: false,
					creationMenu: false,
					profileMenu: false,
					searchMenu: true,
				});
			}
		}

		if (!typeMenu) {
			setIsMenuActive({
				settingsMenu: false,
				creationMenu: false,
				profileMenu: false,
				searchMenu: false,
			});
		}
	};

	return {
		isMenuActive,
		handleMenuActive,
	};
};
