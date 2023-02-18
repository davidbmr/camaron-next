import { useState } from "react";
import style from "./ToggleSwitch.module.css";

export const ToggleSwitch = ({ value, setValue, title }) => {
	const handleChangeCheckbox = () => {
		setValue(!value);
	};

	return (
		<div className={style.toggleSwitchContainer}>
			<p className={style.toggleTitle}>{title}</p>
			<label className={style.switch}>
				<input
					type='checkbox'
					name='miCheck'
					checked={value}
					value={value}
					onChange={handleChangeCheckbox}
				/>
				<span className={`${style.slider} ${style.round}`}></span>
			</label>
		</div>
	);
};
