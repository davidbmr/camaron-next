import style from "./ContactField.module.css";
export const ContactField = ({ icon, data, setNewData, dataProperty, placeholder }) => {
	// ---- Cambiar inputs
	const handleChangeInput = (e) => {
		if (dataProperty === "email") return;
		setNewData({
			...data,
			contact: {
				...data?.contact,
				[dataProperty]: e.target.value,
			},
		});
	};

	return (
		<div className={style.infoServiceProfileContainer}>
			<div className={style.contactFieldIcon}>{icon}</div>

			{/* {dataProperty === "website" && <div>+</div>} */}
			{/* {dataProperty === "email" && <div>+</div>} */}

			{dataProperty === "phone" && <div className={style.additionalText}>+</div>}
			{dataProperty === "whatsapp" && <div className={style.additionalText}>+</div>}

			{dataProperty === "facebook" && <div>@</div>}
			{dataProperty === "instagram" && <div>@</div>}
			{dataProperty === "linkedin" && <div>@</div>}
			{dataProperty === "twitter" && <div>@</div>}

			<input
				type={dataProperty === "phone" || dataProperty === "whatsapp" ? "number" : "text"}
				className={style.profileServiceTitle}
				value={data?.contact[dataProperty]}
				name={dataProperty}
				onChange={handleChangeInput}
				placeholder={placeholder}
			/>
		</div>
	);
};
