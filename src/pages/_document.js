import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		let dataLogin = localStorage.getItem("userLogin_camaron");

	// 		if (dataLogin) {
	// 			dispatch(setUser({ user: JSON.parse(dataLogin) }));
	// 		}
	// 	}
	// }, []);
	return (
		<Html lang="es">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
