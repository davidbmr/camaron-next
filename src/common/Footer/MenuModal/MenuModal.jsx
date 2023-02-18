import { useEffect } from "react";
import style from "./MenuModal.module.css";

export const MenuModal = ({ children, handleMenuActive }) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "visible";
		};
	}, []);
	return (
		<div className={style.modalContainer}>
			<div className={style.modalContainerOverlay} onClick={() => handleMenuActive()}></div>
			<div className={style.modalItems}>{children}</div>
		</div>
	);
};
