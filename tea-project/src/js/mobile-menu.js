const OPEN_CLASS = "is-open";

export function initMobileMenu() {
	const openButton = document.querySelector("[data-menu-open]");
	const closeButton = document.querySelector("[data-menu-close]");
	const menuList = document.querySelector("[data-menu-list]");
	const overlay = document.querySelector("[data-menu-overlay]");

	if (!openButton || !closeButton || !menuList || !overlay) {
		return;
	}

	const setMenuState = (isOpen) => {
		menuList.classList.toggle(OPEN_CLASS, isOpen);
		overlay.classList.toggle(OPEN_CLASS, isOpen);
		openButton.setAttribute("aria-expanded", String(isOpen));
	};

	openButton.addEventListener("click", () => {
		setMenuState(!menuList.classList.contains(OPEN_CLASS));
	});

	closeButton.addEventListener("click", () => {
		setMenuState(false);
	});

	overlay.addEventListener("click", () => {
		setMenuState(false);
	});
}
