import "@/styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../store/store";

import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<GoogleOAuthProvider clientId='878722788161-2kl4u889ik0llh8u0bjt8o92i18hol9t.apps.googleusercontent.com'>
				<Component {...pageProps} />
			</GoogleOAuthProvider>
		</Provider>
	);
}
