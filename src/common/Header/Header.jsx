import { useDispatch } from "react-redux";
import Image from "next/image";
import style from "./Header.module.css";
import { useRouter } from "next/router";
import { clearSetIsActive } from "@/store/slices/services";

export const Header = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleClickLogo = () => {
		router.push("/");
		dispatch(clearSetIsActive());
	};

	return (
		<header className={style.headerApp}>
			<div className={style.imgLogo} onClick={handleClickLogo}>
				<Image
					className={style.imgLogoItem}
					height='32'
					width='180'
					src={"/assets/svg/LogoCamaron.svg"}
					alt='Logo Camaron'
				/>
			</div>
		</header>
	);
};
