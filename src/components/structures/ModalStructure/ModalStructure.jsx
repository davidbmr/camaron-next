// import { useEffect } from "react";
import style from "./ModalStructure.module.css";

export const ModalStructure = ({ children, onActive }) => {
	// const [status, setStatus] = useState(true);

	// useEffect(() => {
	// 	document.body.style.overflow = "hidden";
	// 	console.log("useeffecto entrado");

	// 	return () => {
	// 		document.body.style.overflow = "auto";
	// 	};
	// }, []);

	return (
		<div className={style.modalContainer}>
			<div className={style.modalOverlayClose} onClick={() => onActive()}></div>
			<div className={style.modalContain}>{children}</div>
		</div>
	);
};
