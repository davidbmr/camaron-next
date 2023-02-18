/**
 * 1. Eliminar los espacios en blanco
 * 2. Convertir las propiedades en un arreglo
 * 3. Retornar el arreglo
 */

export const formatContactData = (obj) => {
	let newArr = [];

	for (let prop in obj) {
		if (obj[prop]) {
			newArr.push(prop);
		}
	}

	return newArr;
};
