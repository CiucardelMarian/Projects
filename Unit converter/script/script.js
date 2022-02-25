const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')
const btnEl = document.getElementById('convert')

btnEl.addEventListener('click', getInput)

function getInput() {
    let inputNumber = document.getElementById('numberInput').value

    let unit = parseFloat(inputNumber)
    if (isNaN(unit)) {
        alert('Please input a number')
    }
        else {
            let unitFeet = unit * 3.2808399
            let unitMeter = unit / 3.2808399
            let unitGallons = unit * 0.264172052
            let unitLiters = unit / 0.264172052
            let unitPounds = unit * 2.20462262
            let unitKilos = unit / 2.20462262
                
                lengthEl.textContent = unit + ' meters = ' + unitFeet.toFixed(3) + ' feet | ' + unit + ' feet = ' + unitMeter.toFixed(3) + ' meters'
                volumeEl.textContent = unit + ' liters = ' + unitGallons.toFixed(3) + ' gallons | ' + unit + ' gallons = ' + unitLiters.toFixed(3) + ' liters'
                massEl.textContent = unit + ' kilos = ' + unitPounds.toFixed(3) + ' pounds | ' + unit + ' pounds = ' + unitKilos.toFixed(3) + ' kilos'
        }

}

