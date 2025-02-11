import {
	findMinTemperature,
	findMaxTemperature,
	findAvgTemperature,
	getAllData,
} from "./computeTemperatures.js";

export function setCity(city) {
	document.querySelector("#city").innerHTML = city;
}

export function setStartDate(date) {
	document.querySelector("#start-date").innerHTML = date;
}

export function setEndDate(date) {
	document.querySelector("#end-date").innerHTML = date;
}

export function setTableData(temperaturesData) {
	let html = "";

	temperaturesData.forEach((dayTemps) => {
		const allData = getAllData(dayTemps.hourlyTemperatures);

		html += `<tr>
					<td>${dayTemps.date}</td>
					<td>${allData.min.toFixed(1)}</td>
					<td>${allData.max.toFixed(1)}</td>
					<td>${allData.average.toFixed(1)}</td>
				</tr>`;
	});
	document.querySelector("#average-temperatures").innerHTML = html;
}
