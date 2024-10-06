let dropdown = document.querySelector('.dropdown');

function showDropdown() {
    dropdown.style.transform = "translateX(-50%) scaleY(1)";
}
function hideDropdown() {
    dropdown.style.transform = "translateX(-50%) scaleY(0)";
}