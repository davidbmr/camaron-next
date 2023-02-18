import { useEffect } from "react";
import style from "./DateField.module.css";

export const DateField = ({ title, data, dataProperty, setNewData, isEdit }) => {
	useEffect(() => {
		if (!data.date) {
			// crea un nuevo objeto `Date`
			let today = new Date();

			// `getDate()` devuelve el día del mes (del 1 al 31)
			let day = today.getDate();
			if (day < 10) {
				day = `0${day}`;
			}

			// `getMonth()` devuelve el mes (de 0 a 11)
			let month = today.getMonth() + 1;

			// `getFullYear()` devuelve el año completo
			let year = today.getFullYear();

			// muestra la fecha de hoy en formato `MM/DD/YYYY`
			let fullDate = `${year}-${month}-${day}`;
			setNewData({ ...data, date: fullDate });
		}
	}, [data]);

	const onChangeInput = (e) => {
		setNewData({ ...data, [dataProperty]: e.target.value });
	};

	return (
		<div className={`${style.informationFieldContainer} ${style.fieldActive}`}>
			<input
				className={style.informationField}
				type='date'
				value={title}
				onChange={onChangeInput}
				// disabled={isDisabled}
			/>
		</div>
	);
};

DateField.defaultProps = {
	title: "",
	//El value va con espacio vacio para que no salte el warning de uncontroller hasta que se carguen los datos
	value: " ",
	placeholder: "",
	isEdit: true,
};
