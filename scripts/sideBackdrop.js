if (window.innerWidth > 1024) {
    const menuCard = document.querySelector(".menu-card")
    const back = document.querySelectorAll(".back"), back2 = document.querySelectorAll(".back2")
    setTimeout(() => {
      console.log(menuCard.offsetWidth, back.offsetWidth)
      back.forEach(el => el.style.width = menuCard.offsetWidth + "px")
      back2.forEach(el => el.style.width = menuCard.offsetWidth + "px")
    }, 10);
  }
