// add library before code <link rel="stylesheet"
// href="https://unpkg.com/swiper/swiper-bundle.min.css" /> <script
// src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
$(document).ready(function () {
    var mySwiper = new Swiper ('speaker-slider', {
        slidesPerView: 4,
         slidesPerGroup: 1,
         spaceBetween: 28,
         grabCursor:true,
         allowTouchMove: true,
         navigation: {
         nextEl: '#right-button',
         prevEl: '#left-button',
        },
            breakpoints: {
             0: { /* when window >=0px - webflow mobile landscape/portriat */
                 slidesPerView: 1.2,
                slidesPerGroup:1,
               spaceBetween: 28,
             },
                 480: { /* when window >=0px - webflow mobile landscape/portriat */
                 slidesPerView: 1.5,
                slidesPerGroup:1,
               spaceBetween: 28,
             },
             767: { /* when window >= 767px - webflow tablet */
                   slidesPerView: 3.2,
                slidesPerGroup:1,
               spaceBetween: 28,
             },
             992: { /* when window >= 988px - webflow desktop */
                slidesPerView: 4,
                slidesPerGroup:1,
               spaceBetween: 28,
             }
           },
             });

});