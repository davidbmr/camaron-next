import style from "./MenuButtonContact.module.css";

export const MenuButtonContact = ({
	titleButton,
	statusMenuContact,
	statusMenuEditContact,
	setNameSocial,
	nameData,
}) => {
	const handleChangeMenu = () => {
		statusMenuContact();
		statusMenuEditContact();
		setNameSocial(nameData);
	};
	return (
		<>
			<div
				className={style.menuButtonContactContainer}
				onClick={handleChangeMenu}
			>
				<p className={style.menuButtonContactText}>{titleButton}</p>
			</div>
		</>
	);
};
