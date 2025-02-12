await new Promise((res) => {
	setTimeout(() => {
		res("");
	}, 2000);
}); //2s

document.body.style.backgroundColor = "black";
console.log("defaultStyle.js modulio darbas yra baigtas");
