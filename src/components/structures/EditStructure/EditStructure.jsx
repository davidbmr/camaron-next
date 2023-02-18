import { ActiveEditButtons } from "../../molecules/button/ActiveEditButtons/ActiveEditButtons";

import style from "./EditStructure.module.css";

export const EditStructure = ({
	children,
	isEdit,
	isEditActive,
	handleIsEditActive,
	data,
	functionToDispatch,
	functionToReset,
}) => {
	return (
		<div className={style.editContainer}>
			<div className={style.childrenContainer}>{children}</div>
			{isEdit && (
				<ActiveEditButtons
					isEditActive={isEditActive}
					handleIsEditActive={handleIsEditActive}
					newData={data}
					functionToDispatch={functionToDispatch}
					functionToReset={functionToReset}
				/>
			)}
		</div>
	);
};

EditStructure.defaultProps = {
	isEdit: false,
};
