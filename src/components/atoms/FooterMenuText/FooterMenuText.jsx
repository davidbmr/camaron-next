import style from "./FooterMenuText.module.css";

export const FooterMenuText = ({ text, onClick, cursor }) => {
	return (
		<div
			className={`${style.menuTextContainer} ${cursor === "pointer" && style.cursorPointer}`}
			onClick={onClick}
		>
			<p className={`${style.menuText} ${cursor === "pointer" && style.cursorPointer}`}>{text}</p>
		</div>
	);
};
