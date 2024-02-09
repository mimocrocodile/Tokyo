// Окна
const accept = document.querySelector(".accept")
const acceptFirst = document.querySelector(".accept-first")
const acceptSecond = document.querySelector(".accept-second")
const acceptThird = document.querySelector(".accept-third")
// Кнопки
const acceptOk = document.querySelector(".accept-ok")
const acceptNext = document.querySelector(".accept-next")
const acceptBack = document.querySelector(".accept-back")
const acceptTback = document.querySelector(".accept-tback")
const acceptTnext = document.querySelector(".accept-tnext")
const plusBtns = document.querySelectorAll(".menu-plus")
// Окна доставки, счета
const sliderContainer = document.querySelector(".slider-container")
const order = document.querySelector(".order")
const delivery = document.querySelector(".delivery")
// const menuContainer = document.querySelector(".menu-container")
const infoContainer = document.querySelector(".info-container")



if(window.innerWidth >= 1024){

    plusBtns.forEach(el => el.addEventListener("click", () => {
        accept.style.display = "block"
        accept.style.boxShadow = "0px 0px 16px 0px #FFB32E80"
        acceptFirst.style.display = "inline-flex"
    }))
    acceptOk.addEventListener("click", () => {
        sliderContainer.style.display = "none"
        order.style.display = 'block'
        delivery.style.display = 'block'
        acceptFirst.style.display = "none"
        acceptSecond.style.display = "flex"
        accept.style.display = "flex"
        accept.style.boxShadow = "none"
        accept.classList.add("accept-deskver")
    })
    acceptBack.addEventListener("click", () => {
        // menuContainer.style.display = 'block'
        sliderContainer.style.display = "block"
        accept.classList.remove("accept-deskver")
        accept.style.display = "block"
        acceptSecond.style.display = "none"
        acceptFirst.style.display = "inline-flex"
        order.style.display = 'none'
        delivery.style.display = 'none'
    })
}

if(window.innerWidth <= 1023){
    plusBtns.forEach(el => el.addEventListener("click", () => {
        accept.style.display = "block"
        acceptFirst.style.display = "grid"
    }))
    acceptOk.addEventListener("click", () => {
        sliderContainer.style.display = 'none'
        order.style.display = 'flex'
        acceptFirst.style.display = "none"
        acceptSecond.style.display = "flex"
        infoContainer.style.display = "block"
    })
    acceptBack.addEventListener("click", () => {
        order.style.display = "none"
        sliderContainer.style.display = 'block'
        acceptSecond.style.display = "none"
        acceptFirst.style.display = "grid"
        infoContainer.style.display = "none"
    })
    acceptNext.addEventListener("click", () => {
        order.style.display = "none"
        acceptSecond.style.display = "none"
        acceptThird.style.display = "flex"
        delivery.style.display = "block"
    })
    acceptTback.addEventListener("click", () => {
        order.style.display = "flex"
        acceptSecond.style.display = "flex"
        acceptThird.style.display = "none"
        delivery.style.display = "none"
    })
    acceptTback.addEventListener("click", () => {
        acceptThird.style.display = "none"
        delivery.style.display = "none"
    })
}