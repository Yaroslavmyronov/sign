class ScrollUp {
	selectors = {
		buttonSelector: '[data-js-scroll]',
	}

	stateClasses = {
		block: 'block',
		none: 'none',
	}

	constructor() {
		this.button = document.querySelector(this.selectors.buttonSelector)

		this.init()
	}

	init() {
		window.addEventListener('scroll', () => this.toggleButton())
		// this.button.addEventListener('click', () => this.scrollToTop())
	}

	toggleButton() {
		if (window.scrollY > 200) {
			this.button.style.display = this.stateClasses.block
		} else {
			this.button.style.display = this.stateClasses.none
		}
	}

	// scrollToTop() {
	// 	const scrollStep = -window.scrollY / 50
	// 	const scrollInterval = () => {
	// 		if (window.scrollY !== 0) {
	// 			window.scrollBy(0, scrollStep)
	// 			requestAnimationFrame(scrollInterval)
	// 		}
	// 	}
	// 	requestAnimationFrame(scrollInterval)
	// }
}

export default ScrollUp
