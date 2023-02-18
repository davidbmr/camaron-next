import { useSelector } from "react-redux";

import { ProfileMenu } from "./menus/ProfileMenu/ProfileMenu";
import { CreationMenu } from "./menus/CreationMenu/CreationMenu";
import { SearchMenu } from "./menus/SearchMenu/SearchMenu";


// import { ProfileImage } from "../../components/UI/atoms/images/ProfileImage/ProfileImage";



import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
// import iconoLogo from "../../assets/favicon.png";

import style from "./Footer.module.css";
import { AddButton } from "@/components/atoms/buttons/AddButton/AddButton";
import { useFooterMenu } from "@/hooks/useFooterMenu";

export const Footer = () => {
	const { isLogged } = useSelector((state) => state.auth);
	const { profilePic, usersAcess } = useSelector((state) => state.auth.user);
	const { isMenuActive, handleMenuActive } = useFooterMenu();

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
							{!isLogged ? (
								<AiOutlineMenu />
							) : (
								<div className={style.footerProfilePic}>
									{/* <ProfileImage img={profilePic} /> */}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* ---- Menu del Footer ---- */}
			{isMenuActive.profileMenu && (
				<ProfileMenu
					isLogged={isLogged}
					usersAcess={usersAcess}
					handleMenuActive={handleMenuActive}
				/>
			)}
			{isMenuActive.creationMenu && (
				<CreationMenu handleMenuActive={handleMenuActive} isLogged={isLogged} />
			)}
			{isMenuActive.searchMenu && <SearchMenu handleMenuActive={handleMenuActive} />}
		</>
	);
};
