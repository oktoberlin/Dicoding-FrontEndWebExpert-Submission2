class daftarRestoran extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="latest">
            <h1 class="latest__label">Daftar Restoran</h1>
            <div id="posts" class="posts">
            </div>
        </div>`;
	}
}

customElements.define('daftar-restoran', daftarRestoran);