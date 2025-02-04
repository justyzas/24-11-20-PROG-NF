const alternatyviNuotrauka = "./default.jpg";
document.querySelector("#nuotrauka").addEventListener("error", (e) => {
	console.log(e);
	e.target.src = alternatyviNuotrauka;
});
