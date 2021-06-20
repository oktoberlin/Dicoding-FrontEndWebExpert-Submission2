import loadingImage from '../../public/images/loading/loading.gif';

class loadingPost extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div id="loading-post">
          <img id="loading-gif" alt="loading" src="${loadingImage}">
          <p>Please wait...</p>
        </div>`;
	}
}

customElements.define('loading-post', loadingPost);