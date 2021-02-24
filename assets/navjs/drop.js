$('.list-header').on('click', function() {
    var $J_li = $(this).parents('.J_list')
    $J_li.hasClass('open') ? $J_li.removeClass('open') : $J_li.addClass('open');
});


$('.products-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


const imgFit = document.querySelectorAll(".img-fit"),
    parentImg = document.querySelector(".img-group-photo");

function closeImg() {
    imgFit.forEach((item) => {
        item.classList.remove("img_active");
        item.classList.add("img_unactive");
    })
}

function showImg(n = 0) {
    imgFit[n].classList.add("img_active");
    imgFit[n].classList.remove("img_unactive");
}

closeImg();
showImg();


parentImg.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains("img-fit")) {
        imgFit.forEach((item, n) => {
            if (target == item) {
                closeImg();
                showImg(n);
            }
        });
    }
})