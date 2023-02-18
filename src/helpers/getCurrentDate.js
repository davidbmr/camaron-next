export let getCurrentDate = () => {
	var MyDate = new Date();
	var MyString = MyDate.toTimeString();
	var MyOffset = MyString.slice(9, 17);
	const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	const months = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	];
	const stringDate = `${days[MyDate.getDay()]} ${MyDate.getDate()} de ${
		months[MyDate.getMonth()]
	} del ${MyDate.getFullYear()} a las ${MyDate.getHours()}:${MyDate.getMinutes()} horas ${MyOffset}`;
	let date = {
		day: days[MyDate.getDay()],
		date: MyDate.getDate(),
		month: months[MyDate.getMonth()],
		hour: MyDate.getHours(),
		huso: MyOffset,
		stringDate: stringDate,
	};
	return date;
};

export let formatRequestService = (date) => {
	let arrDate = date.split("-");
	let limitDay = arrDate[2];

	let limitMonth = arrDate[1];
	const months = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	];
	let nameMonth = months[limitMonth - 1];

	let limitYear = arrDate[0];

	let newDate = `Para el ${limitDay} de ${nameMonth} del ${limitYear}`;

	return newDate;
};
