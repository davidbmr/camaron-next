import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setUrl } from "../../../../../store/slices/redirection/redirectionSlice";

import { PrimaryButton } from "../../../atoms/buttons/PrimaryButton/PrimaryButton";
import { DisplayMenu } from "../../../organisms/menu/DisplayMenu/DisplayMenu";
import { MenuToContact } from "../../menu/MenuToContact/MenuToContact";

export const ButtonToContact = ({ data, mail, camaron }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [statusMenuToContact, setStatusMenuToContact] = useState(false);
	const { isLogged } = useSelector((state) => state.auth);

	const handleStatusMenuToContact = () => {
		setStatusMenuToContact(!statusMenuToContact);
	};

	const handleStatusLoggedContact = () => {
		if (isLogged) {
			handleStatusMenuToContact();
		} else {
			dispatch(setUrl(pathname));
			navigate("/login");
		}
	};

	return (
		<>
			<PrimaryButton title={"Contactar"} onClick={handleStatusLoggedContact} />

			{/* Menu to contact */}

			{statusMenuToContact && (
				<DisplayMenu
					menu={
						<MenuToContact
							data={data}
							mail={mail}
							camaron={camaron}
							closeMenuFunction={handleStatusMenuToContact}
						/>
					}
					closeMenuFunction={handleStatusMenuToContact}
				/>
			)}
		</>
	);
};
