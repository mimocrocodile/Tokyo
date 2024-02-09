document.addEventListener("DOMContentLoaded", () => {
// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     loop: true,
//     spaceBetween: 30,
//     breakpoints: {
//       300: {
//         loop: true,
//         slidesPerView: 1.25,
//         // sliderPerGroup: 1,
//         // cssMode: true,
//         slidesPerGroup: 1,
//         spaceBetween: 18,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//       1200: {
//         slidesPerView: 4,
//       },
//       1400: {
//         slidesPerView: 5,
//       },
//       1800: {
//         slidesPerView: 6,
//       }
//     },
//   });

// const swiper1 = new Swiper('.swiper1',{})
// const swiper2 = new Swiper('.swiper2',{})
// const swiper3 = new Swiper('.swiper3',{})
//   document.querySelector(".slider1-rightarrow").addEventListener("click", () => {
//     swiper1.slideNext();
//   })
//   document.querySelector(".slider1-leftarrow").addEventListener("click", () => {
//     swiper1.slidePrev();
//   })

    swiperCreator = slider => {
        console.log(slider)
    const newSLider = new Swiper(`#${slider}`, {
        speed: 200,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          300: {
            loop: true,
            slidesPerView: 1.25,
            // sliderPerGroup: 1,
            // cssMode: true,
            slidesPerGroup: 1,
            spaceBetween: 18,
          },
          500: {
            slidesPerView: 2
          },
          800: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
          1800: {
            slidesPerView: 6,
          }
        },
        navigation:{
          nextEl: `.${slider}-rightarrow`,
          prevEl: `.${slider}-leftarrow`
        }
    })
    return newSLider
  }

  const sliders = document.querySelectorAll(".swiper")
  sliders.forEach(element => {
    swiperCreator(element.id)
  });

});

