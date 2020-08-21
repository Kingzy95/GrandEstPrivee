/*
const items = document.querySelectorAll('li');
const underline = document.querySelector('.underline');

//Set intial size of size the bar
underline.getElementsByClassName.width = items[0].offsetWidth + 'px';

for (let i = 0; i < items.length; i++) {
    const li = items[i];

    li.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        li.classList.add('active');

        //Move the bar dynamically
        let sizeToMove = 0;
        for (let j = 0; j < i; J++) {
            sizeToMove += items[j].offsetWidth;
        }
        underline.getElementsByClassName.left = sizeToMove + 'px';
        underline.style.width = li.offsetWidth + 'px';
    });
}*/


// First Slider 
$('.slider-one')
    .not(".slick-intialized")
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: ".site-slider .slider-btn .prev",
        nextArrow: ".site-slider .slider-btn .next"
    });


//Two Slider 

$('.slider-two')
    .not(".slick-intialized")
    .slick({
        prevArrow: ".site-slider-two .prev",
        nextArrow: ".site-slider-two .next",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        infinite: true,
    });


// Third Slider

$('.slider-three')
    .not(".slick-intialized")
    .slick({
        prevArrow: ".site-slider-three .prev",
        nextArrow: ".site-slider-three .next",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        infinite: true
    });

/* Four Slider */

$('.slider-four')
    .not(".slick-intialized")
    .slick({
        prevArrow: ".site-slider-four .prev",
        nextArrow: ".site-slider-four .next",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        infinite: true
    });


/* Five Slider */

$('.slider-five')
    .not(".slick-intialized")
    .slick({
        prevArrow: ".slider-brand .prev",
        nextArrow: ".slider-brand .next",
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        infinite: true
    });