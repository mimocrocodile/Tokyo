const minusBtns = document.querySelectorAll(".menu-minus")
const plusBtnss = document.querySelectorAll(".menu-plus")
minusBtns.forEach(el => el.addEventListener("click", ()=>{
    let count = el.nextElementSibling
    if(count.value>=1){count.value = parseInt(count.value) - 1 }
    console.log(count.value)
}))
plusBtnss.forEach(el => el.addEventListener("click", ()=>{
    let count = el.previousElementSibling
    count.value = parseInt(count.value)+1
    console.log(count)
}))