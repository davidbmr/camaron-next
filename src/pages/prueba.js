import Head from "next/head";
import React from "react";

export async function getServerSideProps(context) {

	return {  };
}

const prueba = () => {
	return (
		<>
			<Head>
				<meta name="description" content="Pagina prueba" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="title" content="Prueba Camaron titulo" />
				<title>Soy camaron app | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<p>hola</p>
		</>
	);
};

export default prueba;
