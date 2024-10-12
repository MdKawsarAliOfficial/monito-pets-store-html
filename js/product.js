let photos = ["img/card_image-1.png", "img/card_image-2.png", "img/card_image-3.png", "img/card_image-4.png", "img/card_image-5.png"];
let img = document.querySelector(".slider_image img");
let count = 0;

// ---------------------------------------- //
let image_container = document.querySelector('.navigator_images');
for (let i = 0; i < photos.length; i++) {
    let newImage = document.createElement('img');
    newImage.src = photos[i];
    newImage.alt = 'navigator image';
    image_container.appendChild(newImage);
}

let mini_image = document.querySelectorAll('.navigator_images img');
mini_image.forEach(m_image => {
    m_image.addEventListener('click', (event) => {
        img.src = m_image.src;
        // for connecting next & prev button
        const clickedImg = event.target;
        const children = Array.from(image_container.children);
        const childIndex = children.indexOf(clickedImg);
        count = childIndex;
    });
});

// ---------------------------------------- //

function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        img.src = photos[count];
    } else {
        img.src = photos[count];
    }
}

function prev() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        img.src = photos[count];
    } else {
        img.src = photos[count];
    }
}