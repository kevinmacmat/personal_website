function initViz() {
	var containerDiv = document.getElementById("tableau-viz"),
	url = "http://YOUR-SERVER/views/YOUR-VISUALIZATION";

	var viz = new tableau.Viz(containerDiv, url);
}