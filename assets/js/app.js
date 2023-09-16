// let a = document.getElementById("nav")
// let flow = document.querySelector(".flow")
// let cross4 = document.querySelector(".span-4")
// let cross5 = document.querySelector(".span-5")
// let cross6 = document.querySelector(".span-6")

// function responsive() {
//     a.classList.toggle("left-0")
//     flow.classList.toggle("flow-hidden")
//     cross4.classList.toggle("span-1")
//     cross5.classList.toggle("span-2")
//     cross6.classList.toggle("span-3")
// }


let a = document.getElementById("nav")
let flow = document.querySelector(".flow")
let cross4 = document.querySelector(".cross-4")
let cross5 = document.querySelector(".cross-5")
let cross6 = document.querySelector(".cross-6")

function responsive() {
    a.classList.toggle("fix-lft")
    flow.classList.toggle("flow-hidden")
    cross4.classList.toggle("cross-1")
    cross5.classList.toggle("cross-2")
    cross6.classList.toggle("cross-3")
}