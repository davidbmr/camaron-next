import style from "./MenuInput.module.css";

export const MenuInput = ({ type, name, value, onChange, placeholder }) => {
	return (
		<div className={style.menuInputContainer}>
			<input
				className={style.menuInput}
				type={type}
				name={name}
				value={value}
				onChange={(e) => onChange(e, name)}
				placeholder={placeholder}
				autoFocus
			/>
		</div>
	);
};

MenuInput.defaultProps = {
	type: "text",
	placeholder: "Ingrese su informacion aqui",
};
