import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { clearDataVerification, clearLoginErrorMsg, getUser } from "../../store/slices/auth/";

import { SocialLogin } from "./SocialLogin/SocialLogin";

import { clearRedirection } from "../../store/slices/redirection/redirectionSlice";

import { getCurrentDate } from "@/helpers/getCurrentDate";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import style from "./FormLogin.module.css";

export const FormLogin = ({ formChange }) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [user] = useLocalStorage("userLogin_camaron", {});
	const { isLogged } = useSelector((state) => state.auth);

	const { loginErrorMsg, verificationUser } = useSelector((state) => state.auth);

	const { url } = useSelector((state) => state.redirection);

	useEffect(() => {
		dispatch(clearDataVerification());
		if (verificationUser) {
			dispatch(clearDataVerification());
		}
		if (loginErrorMsg) {
			setTimeout(() => {
				dispatch(clearLoginErrorMsg());
			}, 10000);
		}
	}, [loginErrorMsg]);

	useEffect(() => {
		if (user.logged === true || isLogged === true) {
			if (url) {
				router.push(url);
				dispatch(clearRedirection());
			} else {
				router.push("/");
			}
		}
		return () => {
			dispatch(clearRedirection());
		};
	}, [user, isLogged]);

	return (
		<div className={style.sectionLoginContainer}>
			<p className={style.sectionText}>Inicia sesión con:</p>
			<SocialLogin />
			<p className={style.sectionText}>O ingresa tus datos</p>

			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validate={(values) => {
					let errors = {};
					if (!values.email) {
						errors.email = "Por favor, ingrese su email";
					}

					if (!values.password) {
						errors.password = "Por favor, ingrese su contraseña";
					}
					return errors;
				}}
				onSubmit={(values) => {
					let currentDate = getCurrentDate();
					let newValue = { ...values, date: currentDate };
					dispatch(getUser(newValue));
				}}
			>
				{({ errors }) => (
					<Form className={style.formLoginContainer}>
						<div className={style.formLoginInputContainer}>
							<Field
								className={style.formLoginInput}
								type="email"
								name="email"
								placeholder="Email"
							/>
							<ErrorMessage
								name="email"
								component={() => <p className="formulario__error">{errors.email}</p>}
							/>
						</div>

						<div className={style.formLoginInputContainer}>
							<Field
								className={style.formLoginInput}
								type="password"
								name="password"
								placeholder="Contraseña"
							/>
							<ErrorMessage
								name="password"
								component={() => <p className="formulario__error">{errors.password}</p>}
							/>
						</div>
						<button type="submit" className={style.formLoginButton}>
							Iniciar sesión
						</button>
					</Form>
				)}
			</Formik>

			{loginErrorMsg && <p className="textErrorMsg">{loginErrorMsg}</p>}

			<p className={style.sectionText}>
				Si no tienes una cuenta
				<span className={style.textRegister} onClick={() => formChange()}>
					regístrate
				</span>
			</p>
		</div>
	);
};
