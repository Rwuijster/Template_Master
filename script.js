const navbar = document.getElementById("navbar");
const openButton = document.getElementById("open-sidebar-button");
const mobileBrandLogo = document.getElementById("mobile-logo-button");

const media = window.matchMedia("(width < 800px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
	const isMobile = e.matches
	console.log(isMobile)
	if(isMobile) {
		navbar.setAttribute('inert', '')
	}
	else {
		//On Desktop device
		navbar.removeAttribute('inert')
	}
}

function openSidebar() {
	navbar.classList.add("show")
	openButton.setAttribute("aria-expanded", "true")
	navbar.removeAttribute("inert")
	mobileBrandLogo.setAttribute("inert", "")

}

function closeSidebar() {
	navbar.classList.remove("show")
	openButton.setAttribute("aria-expanded", "false")
	navbar.setAttribute("inert", "")
	mobileBrandLogo.removeAttribute("inert");
}


//Close sidebar when clicking a link
const navLinks = document.querySelectorAll('nav a')
nav.Links.forEach(link => {
	link.addEventListener('click', () => {
		closeSidebar()
	})
})

updateNavbar(media)