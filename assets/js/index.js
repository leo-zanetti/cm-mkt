document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const targetElement = document.querySelector(this.getAttribute("href"));
		const navbarHeight = document.querySelector(".navbar").offsetHeight;

		window.scrollTo({
			top: targetElement.offsetTop - navbarHeight,
			behavior: "smooth",
		});
	});
});
