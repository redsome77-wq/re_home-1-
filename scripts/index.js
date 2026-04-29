/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
 이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */
 
 
const heroBnr = document.querySelector ('.heroswiper');
const lookbookBig = document.querySelector ('.bigbdle');
const lookbookZone = document.querySelectorAll ('.right_wrap .lb_swiper');
const brandZone = document.querySelector ('.brandcard');
const wishBtn = document.querySelector('.wish_btn img')

const heroSwiper = new Swiper(heroBnr, {
    loop:true,
    slidesPerView: 1,
    scrollbar: {
        el: ".heroswiper .swiper-scrollbar",
        hide: false,
    },
    autoplay:{
    delay:2000,
    pauseOnMouseEnter:true,
    disableOnInteraction:false,
    }
});

const lookBigSwiper = new Swiper(lookbookBig, {
    allowTouchMove: false,
    loop:true,
    slidesPerView: 1,
    pagination : {
        el:'.bigbdle .pnum .page',
        type:'fraction',
    },
    navigation: {
        nextEl:'.pnum .next',
        prevEl:'.pnum .prev',
    },
});

for(let i=0; i<3; i++){
    const lookSwiper = new Swiper(lookbookZone[i], {
        loop:true,
        autoplay:{
            delay:2500,
            pauseOnMouseEnter:true,
            disableOnInteraction:false,
        },
        slidesPerView: 2,
        spaceBetween: 17,
        scrollbar: {
            el: ".lb_swiper .swiper-scrollbar",
            hide: false,
        },
        breakpoints:{
            401:{
                slidesPerView: 2.1,
            },
            1202:{
                slidesPerView: 2.1,
            },
        },
    });
};

const brandSwiper = new Swiper(brandZone, {
    loop:true,
    autoplay:{
    delay:1500,
    pauseOnMouseEnter:true,
    disableOnInteraction:false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    scrollbar: {
        el: ".brandcard .swiper-scrollbar",
        hide: false,
    },
        breakpoints:{
            401:{
                slidesPerView: 1,
            },
            850:{
                slidesPerView: 2,
            },
            1023:{
                slidesPerView: 3,
            },
        },
    });