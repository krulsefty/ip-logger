// sefty#0001
(async () => {
	const clicktext = document.querySelector("#click-to-enter");

	function buttonDel() {
		const elem = document.getElementById("click-to-enter");
		elem.parentNode.removeChild(elem);
	}

	clicktext.addEventListener("click", () => {
		buttonDel();
		document.querySelector("body").classList.add("container");
	});

})();
