class heroElement extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">Temukan Restoran yang Anda Inginkan</h1>
                <p class="hero__tagline">Banyak Restoran yang telah bergabung untuk memberikan anda pengalaman makan terbaik</p>
            </div>
        </div>`;
	}
}

customElements.define('hero-element', heroElement);
