const btnOption1 = document.getElementById("option-1")
const btnOption2 = document.getElementById("option-2")
const btnOption3 = document.getElementById("option-3")
const showAmount = document.getElementById("total-amount")
const listEl = document.getElementById("list")
const sendBtn = document.getElementById("send-btn")
const option1 = {
    task: "Wash Your Car",
    price: 10,
}
const option2 = {
    task: "Headlight Polish",
    price: 20,
}
const option3 = {
    task: "Interior Detailing",
    price: 30,
}
let list = ""
let totalAmount = 0

console.log(showAmount)

function generateListElement(a, b) {
    return `<li class="space-between list-el"><p class="task">${a}</p><p class="bold">$${b}</p>`
}

btnOption1.addEventListener("click", useOption1)

function reloadList() {
    listEl.innerHTML = list
    showAmount.textContent = "$" + totalAmount
    showAmount.style.color = "#4A4E74"
}

function useOption1() {
    list += generateListElement(option1.task, option1.price)
    totalAmount += option1.price
    reloadList()
}

btnOption2.addEventListener("click", function () {
    list += generateListElement(option2.task, option2.price)
    totalAmount += option2.price
    reloadList()
})

btnOption3.addEventListener("click", function () {
    list += generateListElement(option3.task, option3.price)
    totalAmount += option3.price
    reloadList()
})

sendBtn.addEventListener("click", function () {
    listEl.innerHTML = ""
    list = ""
    totalAmount = 0
    showAmount.textContent = "$0"
    showAmount.style.color = "#918E9B"
})
