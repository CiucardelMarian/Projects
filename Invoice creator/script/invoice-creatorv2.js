const option1Btn = document.getElementById('option1-btn')
const option2Btn = document.getElementById('option2-btn')
const option3Btn = document.getElementById('option3-btn')
const sendInoviceBtn = document.getElementById('send-invoice-btn')
const totalAmountEl = document.getElementById('totalAmount-el')
const listContainer = document.getElementById('ul-container')
const noteMsg = document.getElementById('notes')
const option1 = {
    taskName: "Wash car",
    price: 10,
    optionName: 'option1'
}
const option2 = {
    taskName: "Headlight polish",
    price: 20,
    optionName: 'option2'
}
const option3 = {
    taskName: "Interior detailing",
    price: 30,
    optionName: 'option3'
}
let totalAmount = 0
let requestedServices = []
let list=''


function updateListAndTotal() {
    generateList()
    listContainer.innerHTML = list
    totalAmountEl.textContent ='$' + totalAmount
    noteMsg.style.display = 'block'

}

function generateList() {
    list = ''
    totalAmount = 0
    for (let i = 0; i < requestedServices.length; i++) {
        list += generateListItem(requestedServices[i].taskName,requestedServices[i].price,requestedServices[i].optionName)
        totalAmount += requestedServices[i].price
    }
    console.log(list)

}



function generateListItem(a,b,c) {
    return `<li class="space-evenly">
                <div class="flex">
                    <p>${a}</p>
                    <button class="greybtn-accent" onclick="deleteElement(${c})">Remove</button>
                </div>
                    <p><span class="grey-accent">$</span>${b}</p>
            </li>`
}

function deleteElement(option) {
    for ( i = 0; i < requestedServices.length; i++) {
        if ( requestedServices[i] === option) {
            requestedServices.splice(i, 1)
            i--
            console.log(requestedServices)
            updateListAndTotal()
            console.log('click')
        }
    }


}



option1Btn.addEventListener('click', function() {
    if ( requestedServices.includes(option1)) { }
    else {
            requestedServices.push(option1)

            updateListAndTotal()
}})

option2Btn.addEventListener('click', function() {
    if ( requestedServices.includes(option2)) { }
    else {
            requestedServices.push(option2)
            updateListAndTotal()
    }
})

option3Btn.addEventListener('click', function() {
    if ( requestedServices.includes(option3)) { }
    else {
            requestedServices.push(option3)
            updateListAndTotal()
    }
})

sendInoviceBtn.addEventListener('click', function() {
        generateList()
    totalAmount = 0
    requestedServices = []
    list=''
    updateListAndTotal()
    noteMsg.style.display = 'none'
})

