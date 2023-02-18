import { FooterMenuText } from "@/components/atoms/FooterMenuText/FooterMenuText";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getCurrentDate } from "../../../../components/helpers/getCurrentDate";
// import { logoutUser } from "../../../../components/helpers/logoutUser";
// import { FooterMenuText } from "../../../../components/UI/atoms/FooterMenuText/FooterMenuText";
// import { FieldCreateFooter } from "../../../../components/UI/molecules/FieldCreateFooter/FieldCreateFooter";
import { switchUser } from "../../../../store/slices/auth";
import { MenuModal } from "../../MenuModal/MenuModal";
import style from "./ProfileMenu.module.css";

export const ProfileMenu = ({ isLogged, usersAcess, handleMenuActive }) => {
	// const navigate = useNavigate();
	const router = useRouter();
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth.user);

	const { nickname, isEnterprise } = useSelector((state) => state.auth.user);

	const handleLogoutButton = () => {
		navigate("/");
		logoutUser();
	};

	// ---- Funcion para cambiar de perfil
	const handleSwitchUser = (otherProfile) => {
		let currentDate = getCurrentDate();
		dispatch(switchUser({ nickname: otherProfile, date: currentDate }, token));
		handleMenuActive();
		navigate("/");
	};

	// ---- Navegacion a perfil
	const handleGoProfileView = () => {
		navigate(`/perfil/${nickname}`);
		handleMenuActive();
	};
	// ---- Navegacion para crear otro perfil
	const handleGoCreateProfile = () => {
		navigate("/crear/perfil");
		handleMenuActive();
	};
	// ---- Navegacion a login
	const handleGoLogin = () => {
		router.push("/login");
		handleMenuActive();
	};

	return (
		<MenuModal handleMenuActive={handleMenuActive}>
			{isLogged ? (
				<>
					{/* Ir al perfil */}
					<div onClick={handleGoProfileView}>
						<FooterMenuText text={"Ir al perfil"} cursor={"pointer"} />
					</div>

					{/* <div> */}

					{/* Lista de perfiles */}
					{usersAcess &&
						usersAcess.map((profile) => {
							return (
								<FieldCreateFooter
									key={profile.nickname}
									text={`Cambiar al perfil ${profile.username}`}
									img={profile.profilePic}
									nickname={profile.nickname}
									onClick={handleSwitchUser}
								/>
							);
						})}
					{/* </div> */}

					{/* Crear nuevo perfil */}
					{!isEnterprise && (
						<div onClick={handleGoCreateProfile}>
							<FieldCreateFooter text={"Crear nuevo perfil de empresa"} add={true} />
						</div>
					)}
					<FooterMenuText text={"Cerrar sesion"} onClick={handleLogoutButton} cursor={"pointer"} />
				</>
			) : (
				<>
					<div onClick={handleGoLogin} style={{ cursor: "pointer" }}>
						<FooterMenuText text={"Iniciar sesión"} />
					</div>

					<FooterMenuText
						text={"Ayuda"}
						cursor={"pointer"}
						onClick={() => alert("Funcionalidad en desarrollo")}
					/>
					<FooterMenuText
						text={"Volver atras"}
						cursor={"pointer"}
						onClick={() => {
							window.history.back();
							handleGoLogin();
						}}
					/>
				</>
			)}
		</MenuModal>
	);
};
