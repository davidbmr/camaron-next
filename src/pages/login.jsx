import { FormLogin } from "@/auth/FormLogin/FormLogin";
import { FormRegister } from "@/auth/FormRegister/FormRegister";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { Footer } from "@/common/Footer/Footer";
import { Header } from "@/common/Header/Header";
import { MainContainer } from "@/components/structures/MainContainer/MainContainer";
import { useEffect, useState } from "react";

export default function Login() {
	const [currentForm, setCurrentForm] = useState("login");

	// ---- Restauracion del scroll para el navigate desde el perfil
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleFormChange = () => {
		if (currentForm === "login") {
			setCurrentForm("register");
		} else {
			setCurrentForm("login");
		}
	};
	return (
		<>
			<Header />
			<MainContainer>
				{currentForm === "login" ? <FormLogin formChange={handleFormChange} /> : <FormRegister />}
			</MainContainer>
			<ColorfulBackground />
			<Footer />
		</>
	);
}
