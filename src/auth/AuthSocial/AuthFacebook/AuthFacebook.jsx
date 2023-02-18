// import React from "react";
// import axios from "axios";
// import FacebookLogin from "react-facebook-login";
// import { useDispatch } from "react-redux";
// import { setLoginDate, setUser } from "../../../store/slices/auth";
// import { TiSocialFacebookCircular } from "react-icons/ti";

// import style from "./AuthFacebook.module.css";
// import { getCurrentDate } from "../../helpers/getCurrentDate";
// import { url } from "../../../api/mainApi";

// export const AuthFacebook = () => {
// 	const dispatch = useDispatch();
// 	let currentDate = getCurrentDate();

// 	const responseFacebook = (response) => {
// 		console.log(response);
// 		axios({
// 			method: "POST",
// 			// url: "https://camaron-backend.herokuapp.com/auth/facebooklogin",
// 			url: `${url}/auth/facebooklogin`,
// 			data: { accessToken: response.accessToken, userID: response.userID, date: currentDate },
// 		}).then((response) => {
// 			dispatch(setUser({ user: response.data }));
// 			console.log("Facebook login success,client side", response.data);
// 		});
// 	};
// 	return (
// 		<div>
// 			<FacebookLogin
// 				appId={826954892088499}
// 				callback={responseFacebook}
// 				fields='name,email,picture'
// 				textButton='Ingresar con Facebook'
// 				// icon={<TiSocialFacebookCircular size={"25px"} />}
// 				cssClass={style.facebookContainer}
// 			/>
// 		</div>
// 	);
// };
