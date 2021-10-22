const cardNavBtn =document.querySelectorAll('.card-btn')
const container = document.querySelector(".container")
const openNavIcon = document.querySelector(".open-navbar-icon")
const closeNavIcon = document.querySelector(".close-navbar-icon")
const bgColors = ["#7db0ff", "#bac1cc", "#7db0ff", "#bac1cc", "#7db0ff"];

let i = 0;


//Toggle the popular tours cards front/back
cardNavBtn.forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change-card')
    }
})

//Burger icon left side viewport
openNavIcon.addEventListener("click", () => {
    container.classList.add("change");
});
 
//Closing X icon right side viewport
closeNavIcon.addEventListener("click", () => {
    container.classList.remove("change");
});

//Add bg colors to menu links
Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
    item.style.cssText = `background-color: ${bgColors[i++]}`;
});
  














