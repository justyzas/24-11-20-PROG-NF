// Minimalios temperaturos atradimo funkcija
export function findMinTemperature(tempObj) {
	const objKeys = Object.keys(tempObj); //[00:00, 01:00, ... 23:00]

	const tempArray = objKeys.map((key) => tempObj[key]); // []

	const minTemperature = Math.min(...tempArray);

	return minTemperature;
}
// Maksimalios temperaturos atradimo funkcija
export function findMaxTemperature(tempObj) {
	const objKeys = Object.keys(tempObj); //[00:00, 01:00, ... 23:00]

	const tempArray = objKeys.map((key) => tempObj[key]); // []

	const maxTemperature = Math.max(...tempArray);

	return maxTemperature;
}
// Vidutinės temperaturos atradimo funkcija
export function findAvgTemperature(tempObj) {
	const objKeys = Object.keys(tempObj); //[00:00, 01:00, ... 23:00]

	const tempArray = objKeys.map((key) => tempObj[key]); // []

	let suma = 0;

	tempArray.forEach((x) => (suma += x));

	return suma / objKeys.length;

	// suma/objKeys.length
}

export function getAllData(tempObj) {
	const objKeys = Object.keys(tempObj); //[00:00, 01:00, ... 23:00]
	let min = tempObj[objKeys[0]],
		max = tempObj[objKeys[0]],
		sum = 0;
	objKeys.forEach((key) => {
		const value = tempObj[key];
		if (value < min) min = value;
		if (value > max) max = value;
		sum += value;
	});
	const vidurkis = sum / objKeys.length;

	return { min, max, average: vidurkis };
}
