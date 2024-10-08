const pagination = document.getElementById('pagination');
const totalPages = 20; // মোট কত পৃষ্ঠা আছে
let currentPage = 6;  // বর্তমান পৃষ্ঠা

function createPagination(totalPages, currentPage) {
    let liTag = '';
    let active;
    let beforePages = currentPage - 2; // বর্তমান পৃষ্ঠার আগে কতগুলি দেখানো হবে
    let afterPages = currentPage + 2;  // বর্তমান পৃষ্ঠার পরে কতগুলি দেখানো হবে

    if (currentPage > 1) {
        liTag += `<li><a href="#" onclick="createPagination(${totalPages}, ${currentPage - 1})"><i class="fa-solid fa-arrow-left"></i></a></li>`;
    }

    if (currentPage > 3) {
        liTag += `<li><a href="#" onclick="createPagination(${totalPages}, 1)">1</a></li>`;
        if (currentPage > 4) {
            liTag += `<li><span><i class="fa-solid fa-ellipsis"></i></span></li>`;  // Ellipsis for skipped pages
        }
    }

    for (let page = beforePages; page <= afterPages; page++) {
        if (page > 0 && page <= totalPages) {
            active = page === currentPage ? 'active' : '';
            liTag += `<li class="${active}"><a href="#" onclick="createPagination(${totalPages}, ${page})">${page}</a></li>`;
        }
    }

    if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) {
            liTag += `<li><span><i class="fa-solid fa-ellipsis"></i></span></li>`;  // Ellipsis for skipped pages
        }
        liTag += `<li><a href="#" onclick="createPagination(${totalPages}, ${totalPages})">${totalPages}</a></li>`;
    }

    if (currentPage < totalPages) {
        liTag += `<li><a href="#" onclick="createPagination(${totalPages}, ${currentPage + 1})"><i class="fa-solid fa-arrow-right"></i></a></li>`;
    }

    pagination.innerHTML = liTag;
}

createPagination(totalPages, currentPage);