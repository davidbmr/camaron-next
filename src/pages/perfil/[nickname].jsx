import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getInfoDashboard } from "@/store/slices/dashboard/thunks";
import { clearPerfil } from "@/store/slices/dashboard/dashboardSlice";
import { ProfileTemplate } from "@/components/templates/ProfileTemplate/ProfileTemplate";
import { useRouter } from "next/router";
import { Header } from "@/common/Header/Header";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";

// import { ProfileTemplate } from "../../components/UI/templates/ProfileTemplate/ProfileTemplate";

// import { MetaDecorator } from "../../common/MetaDecorator/MetaDecorator";

export default function Profile() {
	const dispatch = useDispatch();
	const router = useRouter();
	const { nickname } = router.query;

	const loggedUser = useSelector((state) => state.auth.user);
	const { perfil } = useSelector((state) => state.dashboard);

	const [isOwnProfile, setIsOwnProfile] = useState(false);

	// ---- Restauracion del scroll para el navigate desde el perfil
	useEffect(() => {
		// window.scrollTo(0, 0);
		if (nickname === loggedUser.nickname) {
			setIsOwnProfile(true);
		} else {
			setIsOwnProfile(false);
		}
		return () => {
			dispatch(clearPerfil());
		};
	}, []);

	// ---- Obteniendo los datos del perfil
	useEffect(() => {
		dispatch(getInfoDashboard(nickname));
	}, [getInfoDashboard, nickname]);

	// ---- Navegacion hacia la vista del edit
	const handleNavigateEdit = () => {
		router.push(`/perfil/editar/${nickname}`);
	};

	return (
		<>
			<Header />
			<ProfileTemplate
				titleSection='Perfil de usuario'
				data={perfil}
				handleNavigateEdit={handleNavigateEdit}
				isEdit={false}
				isOwnProfile={isOwnProfile}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
}
