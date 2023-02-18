import style from "./AddButton.module.css";

export const AddButton = ({ onClick, size, active }) => {
	const buttonTextStyle = {
		fontSize: `${size ? size + "px" : "25px"}`,
		color: `${active ? "#FF00A5" : "#969696"}`,
		border: `${active ? "solid 3px #ff00a5" : "solid 3px #969696"}`,
	};

	return (
		<button className={style.addButton} style={buttonTextStyle} onClick={onClick}>
			+
		</button>
	);
};
