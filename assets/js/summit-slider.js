// ======================================================
//              SUMMIT SLIDER
// ======================================================

console.log("🚀 summit-slider.js loaded");

if (typeof Swiper === "undefined") {

    console.error("❌ Swiper library is NOT loaded!");

} else {

    console.log("✅ Swiper library loaded.");

}

const summitSliderElement = document.querySelector(".summitSlider");

if (!summitSliderElement) {

    console.error("❌ .summitSlider element NOT found!");

} else {

    console.log("✅ .summitSlider found:", summitSliderElement);

    const summitSlider = new Swiper(".summitSlider", {

        effect: "coverflow",

        centeredSlides: true,

        slidesPerView: "auto",

        loop: true,

        grabCursor: true,

        speed: 900,

        autoplay: {

            delay: 3500,

            disableOnInteraction: false,

            pauseOnMouseEnter: true

        },

        coverflowEffect: {

            rotate: 0,

            stretch: 0,

            depth: 260,

            modifier: 1,

            scale: 0.88,

            slideShadows: false

        },

        keyboard: {

            enabled: true

        },

        navigation: {

            nextEl: ".summit-next",

            prevEl: ".summit-prev"

        },

        pagination: {

            el: ".summit-pagination",

            clickable: true

        }

    });

    console.log("🎉 Summit Swiper initialized successfully!");

}