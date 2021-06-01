import data from '../../DATA.json';

const postResto = () => {
    let output = '';
    data.restaurants.forEach((item) => {
        output += `
        <article class="post-item">
            <img class="post-item__thumbnail"
                    src="${item.pictureId}"
                    alt="${item.name}">
            <div class="post-item__content">
                <div class="rating">
                    <p>Lokasi: <span class="post-item__city">${item.city}</span></p>
                    <p>Rating: <span style="font-weight:bold;">${item.rating}</span></p>
                </div>
                <h1 class="post-item__title"><a href="#">${item.name}</a></h1>
                <p class="post-item__description">${item.description}</p>
                
            </div>
        </article>`;
    });
	document.getElementById('posts').innerHTML = output;
};

export default postResto;
