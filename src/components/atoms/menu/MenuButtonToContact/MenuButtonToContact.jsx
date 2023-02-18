import style from "./MenuButtonToContact.module.css";

export const MenuButtonToContact = ({ title, link, onClick }) => {
	return (
		<>
			<a
				className={style.menuButtonToContactContainer}
				href={link}
				target='_blank'
				onClick={onClick}
			>
				{title}
			</a>
		</>
	);
};
