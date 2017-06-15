function main() {
	console.log("main");
	var mod;
	ajax(
		"src/modules.js", 
		function (text) { mod = eval("(new " + text + ")"); mod.hello(); }, 
		function (err) { console.error("Error: " + err); }
		);
}

window.onload = function () {
	main();
};