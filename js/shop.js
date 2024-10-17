let product_card = document.querySelectorAll('.product_card');

for (let i  = 0; i < product_card.length; i++) {
    product_card[i].addEventListener('click', function() {
        window.location.href = "../product.html";
    });
}
