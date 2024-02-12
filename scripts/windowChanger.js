const nextBtns = document.querySelectorAll(".orderpage-nextbtn")
const prevBtns = document.querySelectorAll(".orderpage-prevbtn")


const orderWindow = document.querySelector(".order")
const deliveryWindow = document.querySelector(".delivery")
const paymentWindow = document.querySelector(".payment")

nextBtns.forEach(el => el.addEventListener("click", ()=>{
    console.log(orderWindow)
    if(orderWindow.classList.contains("isActive")){
        deliveryWindow.classList.add("isActive")
        orderWindow.classList.remove("isActive")
        return
    }
    if(deliveryWindow.classList.contains("isActive")){
        deliveryWindow.classList.remove("isActive")
        paymentWindow.classList.add("isActive")
        // return
    }
    if(paymentWindow.classList.contains("isActive")){
        hideBtn()
    }
}))

prevBtns.forEach(el => el.addEventListener("click", ()=>{
    if(orderWindow.classList.contains("isActive")){
        el.onClick = history.back()
    }
    else el.onClick = ""
    if(deliveryWindow.classList.contains("isActive")){
        deliveryWindow.classList.remove("isActive")
        orderWindow.classList.add("isActive")
     
        return
    }
    if(paymentWindow.classList.contains("isActive")){
        paymentWindow.classList.remove("isActive")
        deliveryWindow.classList.add("isActive")
        revealBtn()
        return
    }
}))


function hideBtn(){
    nextBtns.forEach(el => el.classList.add("isDeactive"))
}

function revealBtn(){
    nextBtns.forEach(el=> el.classList.remove("isDeactive"))
}