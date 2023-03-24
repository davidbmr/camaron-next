// import { FaGoogle, FaFacebook } from "react-icons/fa";
// import { AuthFacebook } from "../../AuthSocial/AuthFacebook/AuthFacebook";

import dynamic from "next/dynamic";

import { AuthGoogle } from "@/auth/AuthSocial/AuthGoogle/AuthGoogle";
import style from "./SocialLogin.module.css";

export const SocialLogin = () => {
	return (
		<div className={style.socialButtonContainer}>
			{/* <button className={style.socialButtonLogin}>
				<FaGoogle size={"25px"} />
				<p>Google</p>
			</button> */}
			<AuthGoogle />

			{/* <button className={style.socialButtonLogin}>
				<FaFacebook size={"25px"} />
				<p>Facebook</p>
			</button> */}
			{/* <AuthFacebook /> */}
		</div>
	);
};
