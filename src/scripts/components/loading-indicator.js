import loadingImage from '../../public/images/loading/loading.gif';

class loadingIndicator extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div id="loading">
          <img id="loading-gif" alt="loading" src="${loadingImage}">
		  <p>Loading...</p>
        </div>`;
	}
}

customElements.define('loading-element', loadingIndicator);