/**
 * funkcija, skirta gauti duomenis iš JSON failo
 * @returns TemperatureData
 */
export async function getTemperatureData() {
	const response = await fetch("/data/temperatures.json");
	const data = await response.json();
	return data;
}
