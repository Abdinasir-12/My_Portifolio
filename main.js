let iconmenu = document.querySelector("#iconmenu")
let menu = document.querySelector("#menu")
let x = document.querySelector("#x")

iconmenu.addEventListener("click", () => {
    menu.style.display = "block"
    x.style.display = "block"
    iconmenu.style.display = "none"
})

x.addEventListener("click", () => {
    menu.style.display = "none"
    iconmenu.style.display = "block"
    x.style.display = "none"
})





// let x = document.querySelector("#x")
// x.addEventListener("click", () => {
//     menu.style.display = "none"
// })




