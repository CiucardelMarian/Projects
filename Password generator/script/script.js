const btnEl = document.getElementById('generate-btn')
const field1 = document.getElementById('password1-el')
const field2 = document.getElementById('password2-el')
const field3 = document.getElementById('password3-el')
const field4 = document.getElementById('password4-el')
const charNumberEl = document.getElementById('char-number')
const errorMessageShort = document.getElementById('error-message1')
const errorMessageLong = document.getElementById('error-message2')
const char = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4',
'5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','{','}',',','.',';',':','?','<','>' ]
const fields = [field1, field2, field3, field4]
let charNumber = 0

btnEl.addEventListener('click', inputPasswordLength)

//Function that fetch the number of characters.
function inputPasswordLength() {
    if (charNumberEl.value < 5) {
        errorMessageShort.style.display = 'block'
        errorMessageLong.style.display = 'none'
    }

    else if (charNumberEl.value < 21) {
        charNumber = charNumberEl.value
        errorMessageShort.style.display = 'none'
        errorMessageLong.style.display = 'none'
        showPasswords()
    }

    else {
        errorMessageLong.style.display = 'block'
        errorMessageShort.style.display = 'none'
    }

}


//Function that output the 4 random passwords, one at a time in a for loop.
function showPasswords() {
    for (let i=0; i < 4 ; i++) {
        fields[i].value = generatePassword()
    }
}

//Function that generate a 8 character random password using Math object and return it.
function generatePassword() {
    let password = ''
    for (let i = 0; i < charNumber; i++) {
        password += char[Math.floor(Math.random() * char.length)]
    }
    return password
}
//Function that copy the password when user click on the input field.
function copyFunction() {
    this.select()
    document.execCommand('copy')
    alert('Password copied!')
}

//Function that add the same event listener to multiple elements.
fields.forEach(item => {
    item.addEventListener('click', copyFunction)
})

