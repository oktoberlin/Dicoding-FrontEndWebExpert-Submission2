class navBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <header class="header">
            <button id="menu" aria-label="Navigasi Drawer"><span>☰</span></button>
            <p>RestoFind</p>
            <nav id="drawer" class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#/">Home</a></li>
                    <li class="nav__item"><a href="#/favorit">Favorite</a></li>
                    <li class="nav__item"><a href="https://github.com/oktoberlin">About Us</a></li>
                </ul>
            </nav>
        </header>`;
	}
}

customElements.define('nav-bar', navBar);