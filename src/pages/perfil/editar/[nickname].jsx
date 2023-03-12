import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ProfileEditionTemplate } from "@/components/templates/ProfileEditionTemplate/ProfileEditionTemplate";
import { editInfoDashboard, getInfoDashboard } from "@/store/slices/dashboard";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";
import { Header } from "@/common/Header/Header";

const ProfileEdition = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const params = router.query;

	const { nickname, token } = useSelector((state) => state.auth.user);
	const { perfil } = useSelector((state) => state.dashboard);
	const [data, setNewData] = useState(null);

	// ---- Restauracion del scroll para el navigate desde el perfil
	useEffect(() => {
		window.scrollTo(0, 0);
		if (params.nickname != nickname) {
			router.push("/");
		}
	}, []);

	useEffect(() => {
		dispatch(getInfoDashboard(nickname));
	}, [getInfoDashboard, nickname]);

	useEffect(() => {
		if (perfil) {
			setNewData(perfil);
		}
	}, [perfil]);

	// ---- Funcion para actualizar los datos
	const handleUpdateService = () => {
		console.log("Perfil actualizado correctamente");
		dispatch(editInfoDashboard(data, token));
		setTimeout(() => {
			router.push(`/perfil/${nickname}`);
		}, 1000);
	};

	return (
		<>
			<Header />

			<ProfileEditionTemplate
				data={data}
				setNewData={setNewData}
				isEdit={true}
				titleSection='Editar perfil de usuario'
				functionToDispatch={handleUpdateService}
			/>

			<ColorfulBackground />
			<Footer />
		</>
	);
};

export default ProfileEdition;
