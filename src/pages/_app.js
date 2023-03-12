import "@/styles/globals.css";

import { Provider } from "react-redux";
import { persistor, store } from "../store/store";

import { PersistGate } from "redux-persist/integration/react";

import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<GoogleOAuthProvider clientId='878722788161-2kl4u889ik0llh8u0bjt8o92i18hol9t.apps.googleusercontent.com'>
					<Component {...pageProps} />
				</GoogleOAuthProvider>
			</PersistGate>
		</Provider>
	);
}
