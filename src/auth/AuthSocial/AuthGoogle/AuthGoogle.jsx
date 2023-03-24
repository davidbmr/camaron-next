import React from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";

import { setUser } from "@/store/slices/auth";
import { url } from "@/connections/mainApi";
import { getCurrentDate } from "@/helpers/getCurrentDate";

export const AuthGoogle = () => {
	const dispatch = useDispatch();

	let currentDate = getCurrentDate();
	return (
		<div>
			<GoogleLogin
				onSuccess={(response) => {
					// console.log(response);
					axios({
						method: "POST",
						// url: `https://camaron-backend.herokuapp.com/auth/googlelogin`,
						url: `${url}/auth/googlelogin`,
						data: {
							credential: response.credential,
							date: currentDate,
						},
					}).then((response) => {
						dispatch(setUser({ user: response.data }));
					});
				}}
				onError={() => {
					console.log("Login Failed");
				}}
			/>
		</div>
	);
};
