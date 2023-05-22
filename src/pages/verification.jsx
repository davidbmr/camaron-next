import { useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";

import { MainContainer } from "@/components/structures/MainContainer/MainContainer";

import { completeVerification } from "@/store/slices/auth/thunks";
import { clearDataVerification, clearVerificationErrorMsg } from "@/store/slices/auth/authSlice";
import { getCurrentDate } from "@/helpers/getCurrentDate";
import { Header } from "@/common/Header/Header";
import { Footer } from "@/common/Footer/Footer";

import style from "../styles/VerificationPage.module.css";
import { ColorfulBackground } from "@/common/ColorfulBackground/ColorfulBackground";
import { clearIsLocation } from "@/store/slices/services";

const VerificationUser = () => {
	const { emailVerification, passwordVerification, verificationErrorMsg, isCreatedUser } =
		useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const router = useRouter();
	const { isLocation } = useSelector((state) => state.services);

	useEffect(() => {
		if (isCreatedUser === true) {
			if (isLocation) {
				router.push(isLocation);
				dispatch(clearIsLocation());
			} else {
				router.push("/");
			}
			setTimeout(() => {
				dispatch(clearDataVerification());
			}, 2000);
		}
		if (verificationErrorMsg) {
			setTimeout(() => {
				dispatch(clearVerificationErrorMsg());
			}, 10000);
		}
	}, [isCreatedUser, clearDataVerification, clearVerificationErrorMsg, verificationErrorMsg]);

	return (
		<>
			<Header />

			<MainContainer>
				<div className={style.sectionInfoContainer}>
					<p className={style.sectionText}>Gracias por registrarte</p>
					<p className={style.sectionText}> 
						Para verificar tu identidad te enviamos un numero Token a tu correo, por favor copia y
						pega el mismo aquí:
					</p>

					<Formik
						initialValues={{
							code: "",
							email: emailVerification,
						}}
						onSubmit={(valores) => {
							let currentDate = getCurrentDate();
							const data = {
								email: emailVerification,
								password: passwordVerification,
								date: currentDate,
							};
							dispatch(completeVerification(valores, data));
              // console.log(valores)
              // console.log(data)
						}}
					>
						{() => (
							<Form className={style.formVerificationContainer}>
								<Field
									className={style.formLoginInput}
									type="number"
									name="code"
									placeholder="Numero de token"
								/>
								<button className={style.formLoginButton} type="submit">
									Verificar e iniciar sesión
								</button>
							</Form>
						)}
					</Formik>

					{verificationErrorMsg && <p className="textErrorMsg">{verificationErrorMsg}</p>}
				</div>
			</MainContainer>

      <ColorfulBackground />
			<Footer />
		</>
	);
};

export default VerificationUser;
