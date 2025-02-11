import { getTemperatureData } from "./modules/getTemperatureData.js";
import {
	setCity,
	setEndDate,
	setStartDate,
	setTableData,
} from "./modules/html.js";

const JSONData = await getTemperatureData();
const data = JSONData.temperatureData;

// Miesto nustatymas
setCity(data.city);

// Datų nustatymas
setStartDate(data.data[0].date);
setEndDate(data.data[data.data.length - 1].date);

//Lentelės sukūrimas
setTableData(data.data);
