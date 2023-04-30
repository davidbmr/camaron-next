import { useEffect } from "react";
import { ProfileMenu } from "./menus/ProfileMenu/ProfileMenu";
import { CreationMenu } from "./menus/CreationMenu/CreationMenu";
import { SearchMenu } from "./menus/SearchMenu/SearchMenu";

// import { ProfileImage } from "../../components/UI/atoms/images/ProfileImage/ProfileImage";

import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

import { AddButton } from "@/components/atoms/buttons/AddButton/AddButton";
import { useFooterMenu } from "@/hooks/useFooterMenu";
import { ProfileImage } from "@/components/atoms/images/ProfileImage/ProfileImage";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getCurrentDate } from "@/helpers/getCurrentDate";
import style from "./Footer.module.css";
import { useRouter } from "next/router";

export const Footer = () => {
	const router = useRouter();
	const [user, saveUser, loadingUser] = useLocalStorage("userLogin_camaron", {});
	const { profilePic, usersAcess, logged } = user;

	const { isMenuActive, handleMenuActive } = useFooterMenu();

	useEffect(() => {
		// Funcion para validar su login
		let currentDate = getCurrentDate();
		if (user.date && typeof window != "undefined") {
			if (user?.date?.date !== currentDate.date) {
				console.log("Tu sesion ha expirado");
				saveUser({});
				router.push("/");
				window.location.reload();
			}
		}
	}, [user]);

	if (loadingUser) {
		return null;
	}

	return (
		<>
			<div className={style.footerLayout}>
				<div className={style.footerContainer}>
					<div className={style.footerIconsContainer}>
						<div
							className={`${style.footerIcon} ${isMenuActive.searchMenu && style.isActiveStyle}`}
							onClick={() => handleMenuActive("searchMenu")}
						>
							<AiOutlineSearch />
						</div>

						<div className={style.mainAddButtonContainer}>
							<div className={style.mainAddButton} onClick={() => handleMenuActive("creationMenu")}>
								<AddButton size={35} active={isMenuActive.creationMenu} />
							</div>
						</div>

						<div
							// className={`${style.footerIcon}  ${isMenuActive.profileMenu && style.isActiveStyle}`}
							className={`${style.footerIcon}`}
							onClick={() => handleMenuActive("profileMenu")}
						>
							{!logged ? (
								<AiOutlineMenu />
							) : (
								<div className={style.footerProfilePic}>
									<ProfileImage img={profilePic} />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* ---- Menu del Footer ---- */}
			{isMenuActive.profileMenu && (
				<ProfileMenu
					isLogged={logged}
					usersAcess={usersAcess}
					handleMenuActive={handleMenuActive}
				/>
			)}
			{isMenuActive.creationMenu && (
				<CreationMenu handleMenuActive={handleMenuActive} isLogged={logged} />
			)}
			{isMenuActive.searchMenu && <SearchMenu handleMenuActive={handleMenuActive} />}
		</>
	);
};
