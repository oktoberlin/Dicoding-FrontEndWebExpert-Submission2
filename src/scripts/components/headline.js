import img from '../../public/images/headline/headline.jpg';

class headline extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <a href="#headline" class="skip-link">Menuju ke konten</a>
        <article id="headline" class="headline">
            <figure class="headline__figure">
                <img src="${img}" alt="Cerita RestoFind">
                <figcaption>Cerita RestoFind</figcaption>
            </figure>
            <div class="headline__content">
                <h1 class="headline__title">#ceritaRestoFind : Story of RestoFind</h1>
                <p class="headline__description">Website RestoFind awalnya dibuat karena masih banyak penikmat 
                makanan masih ragu untuk memilih sebuah restoran yang benar-benar diinginkan. Banyak kendala 
                yang dihadapi tim RestoFind dalam membangun website ini, namun karena kegigihan dan banyaknya 
                dukungan dari pihak lain yang membutuhkan, akhirnya website RestoFind makin lama semakin 
                berkembang sehingga banyak restoran berlomba-lomba untuk memamerkan kualitas restoran mereka 
                mulai dari makanan dan fasilitas maupun interior yang diberikan. Komitmen tim RestoFind telah 
                membantu banyak orang untuk menikmati makanan dengan restoran yang mereka inginkan.                
                </p>
                <button class="headline__button">Read More</button>
            </div>
        </article>`;
	}
}

customElements.define('head-line', headline);
