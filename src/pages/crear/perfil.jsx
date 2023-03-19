import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { createNewProfile } from "@/store/slices/auth";
import { getCurrentDate } from "@/helpers/getCurrentDate";
import { dataStructureProfile } from "@/helpers/dataStructureToCreate";
import { CreateProfileTemplate } from "@/components/templates/CreateProfileTemplate/CreateProfileTemplate";

import { Header } from "@/common/Header/Header";
import { Footer } from "@/common/Footer/Footer";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";

const perfil = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const { token } = useSelector((state) => state.auth.user);
	const [newProfile, setNewProfile] = useState(dataStructureProfile);

	// ---- Restauracion del scroll para el navigate desde el perfil
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// ---- Crear nuevo servicio
	const handleCreateProfile = () => {
		let currentDate = getCurrentDate();
		let newValue = { ...newProfile, date: currentDate };
		dispatch(createNewProfile(newValue, token));
		setTimeout(() => {
			router.push("/");
		}, 1000);
	};

	return (
		<>
			<Header />
			<CreateProfileTemplate
				titleSection='Crear nuevo perfil'
				data={newProfile}
				setNewData={setNewProfile}
				isEdit={true}
				functionToDispatch={handleCreateProfile}
			/>
			<ColorfulBackground />
			<Footer />
		</>
	);
};

export default perfil;
