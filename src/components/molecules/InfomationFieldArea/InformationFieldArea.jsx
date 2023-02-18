import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useEdit } from "../../../hooks/useEdit";
import { EditStructure } from "../../structures/EditStructure/EditStructure";
import style from "./InformationFieldArea.module.css";

//Este componente reemplazara al molecules/profile/infoprofile
export const InformationFieldArea = ({
	title,
	placeholder,
	data,
	dataProperty,
	setNewData,
	functionToDispatch,
	isEdit,
}) => {
	const { isEditActive, handleIsEditActive, isDisabled } = useEdit();
	const inputRef = useRef();

	useEffect(() => {
		if (!isDisabled) {
			inputRef.current.focus();
		}
	}, [isDisabled]);

	const onChangeInput = (e) => {
		setNewData({ ...data, [dataProperty]: e.target.value });
	};

	const handleReset = () => {
		setNewData({ ...data, [dataProperty]: "" });
		inputRef.current.focus();
	};

	return (
		<div className={`${style.informationFieldContainer} ${isEditActive && style.fieldActive}`}>
			<textarea
				ref={inputRef}
				className={style.informationField}
				type='text'
				value={title}
				placeholder={placeholder}
				onChange={onChangeInput}
			/>
		</div>
	);
};

InformationFieldArea.defaultProps = {
	title: "",
	//El value va con espacio vacio para que no salte el warning de uncontroller hasta que se carguen los datos
	value: " ",
	placeholder: "",
	isEdit: true,
};
