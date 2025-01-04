import '../js/init';
import { images } from "../data/images";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = images
	.map(
		({ preview, original, description }) => `
    <li class="gallery-item">
	<a class="gallery-link" href="${original}">
		<img
			class="gallery-image"
			src="${preview}"
			alt="${description}"
			/>
	</a>
</li>

`).join("");

galleryContainer.innerHTML = galleryMarkup;


new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250
});
