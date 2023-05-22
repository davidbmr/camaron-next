import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createNewUser } from "../../store/slices/auth/thunks";
import { clearRegisterErrorMsg } from "../../store/slices/auth";
import { Loader } from "../../common/Loader/Loader";
import style from "./FormRegister.module.css";
import { useRouter } from "next/router";

export const FormRegister = () => {
	// const navigate = useNavigate();
	const router = useRouter();
	const dispatch = useDispatch();

	const { verificationUser, isLoading, registerErrorMsg } = useSelector((state) => state.auth);

	useEffect(() => {
		if (registerErrorMsg) {
			setTimeout(() => {
				dispatch(clearRegisterErrorMsg());
			}, 10000);
		}
		if (verificationUser === true) {
			router.push("/verification");
		}
	}, [registerErrorMsg, verificationUser, clearRegisterErrorMsg]);

	return (
		<div>
			<div className={style.sectionRegisterContainer}>
				<p className={style.sectionText}>Ingresa tus datos</p>

				<Formik
					initialValues={{
						username: "",
						password: "",
						repeatPassword: "",
						email: "",
						repeatEmail: "",
						checked: [],
					}}
					validate={(values) => {
						let errors = {};
						// validaciones para username
						if (!values.username) {
							errors.username = "Por favor ingresa un nombre de usuario";
						}
						// validaciones para password
						if (!values.password) {
							errors.password = "Por favor ingresa una contraseña";
						}
						// validaciones para repeatPassword
						if (!values.repeatPassword) {
							errors.repeatPassword = "Por favor vuelva a ingresar su contraseña";
						} else if (values.repeatPassword !== values.password) {
							errors.repeatPassword = "La contraseña no coincide";
						}

						// validaciones para email
						if (!values.email) {
							errors.email = "Por favor ingresa un correo electronico";
						}
						// validaciones para repeatEmail
						if (!values.repeatEmail) {
							errors.repeatEmail = "Por favor vuelva a ingresar su correo electronico";
						} else if (values.repeatEmail !== values.email) {
							errors.repeatEmail = "El correo electronico no coincide";
						}
						//validaciones para el check de terminos
						if (!values.checked.includes("term")) {
							errors.checked = "Es necesario aceptar los terminos y condiciones";
						}
						return errors;
					}}
					onSubmit={(values) => {
						let newUser = {
							username: values.username,
							email: values.email,
							password: values.password,
						};
						// console.log(newUser);
						dispatch(createNewUser(newUser));
					}}
				>
					{({ errors }) => (
						<Form className={style.formRegisterContainer}>
							<div className={style.formRegisterInputContainer}>
								<Field
									className={style.formRegisterInput}
									type='text'
									name='username'
									placeholder='Nombre de usuario'
								/>
								<ErrorMessage
									name='username'
									component={() => <p className='formulario__error'>{errors.username}</p>}
								/>
							</div>

							<div className={style.formRegisterInputContainer}>
								<Field
									className={style.formRegisterInput}
									type='password'
									name='password'
									placeholder='Contraseña'
								/>
								<ErrorMessage
									name='password'
									component={() => <p className='formulario__error'>{errors.password}</p>}
								/>
							</div>

							<div className={style.formRegisterInputContainer}>
								<Field
									className={style.formRegisterInput}
									type='password'
									name='repeatPassword'
									placeholder='Repetir contraseña'
								/>
								<ErrorMessage
									name='repeatPassword'
									component={() => <p className='formulario__error'>{errors.repeatPassword}</p>}
								/>
							</div>

							<div className={style.formRegisterInputContainer}>
								<Field
									className={style.formRegisterInput}
									type='email'
									name='email'
									placeholder='Email'
								/>
								<ErrorMessage
									name='email'
									component={() => <p className='formulario__error'>{errors.email}</p>}
								/>
							</div>

							<div className={style.formRegisterInputContainer}>
								<Field
									className={style.formRegisterInput}
									type='email'
									name='repeatEmail'
									placeholder='Repetir email'
								/>
								<ErrorMessage
									name='repeatEmail'
									component={() => <p className='formulario__error'>{errors.repeatEmail}</p>}
								/>
							</div>
							<div className={style.formRegisterCheckedContainer}>
								<label className={style.formTerms}>
									<Field type='checkbox' name='checked' value='term' />
									Acepto los
									<span className={style.textRegister}>términos y condiciones</span>
								</label>
								<ErrorMessage
									name='checked'
									component={() => <p className='formulario__error'>{errors.checked}</p>}
								/>
							</div>

							<button type='submit' className={style.formRegisterButton}>
								Registrar
							</button>
						</Form>
					)}
				</Formik>
				{registerErrorMsg && <p className='textErrorMsg'>{registerErrorMsg}</p>}
			</div>
			{isLoading && <div className={style.loaderContainer}>{<Loader />}</div>}
		</div>
	);
};
