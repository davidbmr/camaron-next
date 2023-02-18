import style from "./InformationField.module.css";

//Este componente reemplazara al molecules/profile/infoprofile
export const InformationField = ({ title, placeholder, data, dataProperty, setNewData, isEdit }) => {
	const onChangeInput = (e) => {
		setNewData({ ...data, [dataProperty]: e.target.value });
	};

	return (
		<div className={`${style.informationFieldContainer} ${style.fieldActive}`}>
			<input
				className={style.informationField}
				type='text'
				value={title}
				placeholder={placeholder}
				onChange={onChangeInput}
				// disabled={isDisabled}
			/>
		</div>
	);
};

InformationField.defaultProps = {
	title: "",
	//El value va con espacio vacio para que no salte el warning de uncontroller hasta que se carguen los datos
	value: " ",
	placeholder: "",
	isEdit: true,
};
