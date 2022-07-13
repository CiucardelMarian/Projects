const char = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4',
'5','6','7','8','9','0','!','@','#','$','%','^','&','*']
const generateBtn = document.getElementById('generate-password')
const passwordField1 = document.getElementById('password-1')
const passwordField2 = document.getElementById('password-2')
const passwordField3 = document.getElementById('password-3')
const passwordField4 = document.getElementById('password-4')
const increseEl = document.getElementById('increse-btn')
const decreseEl = document.getElementById('decrese-btn')
const charNumberInput = document.getElementById('char-number')
const errorMessage = document.getElementById('error-msg')
const copyMsg = document.getElementById('copied')
let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let charNumber = 8
let password=''

charNumberInput.addEventListener('change', function(){
    charNumber = charNumberInput.value
})
increseEl.addEventListener('click', function() {
    charNumber++
    charNumberInput.value = charNumber
})

decreseEl.addEventListener('click', function() {
    charNumber--
    charNumberInput.value = charNumber
})

function generatePassword() {
    for (let i = 0; i < charNumber; i++){
        password += char[Math.floor(Math.random() * char.length)]
    }
    return password
}

generateBtn.addEventListener('click', function() {
    charNumber = charNumberInput.value
    if ( 7 < charNumber && charNumber < 21) {
        passwordField1.textContent = generatePassword()
        password=''
        passwordField2.textContent = generatePassword()
        password=''
        passwordField3.textContent = generatePassword()
        password=''
        passwordField4.textContent = generatePassword()
        password=''
        errorMessage.style.display = 'none'
    }
    else {
        errorMessage.style.display = 'block'
    }
})


passwordField1.addEventListener('click', function() {
        navigator.clipboard.writeText(passwordField1.textContent)
        copyMsg.style.display = 'block'
        if ( 480 < width) {
        copyMsg.style.top = '20%'
        copyMsg.style.left = '35%'
        }
        setTimeout(hideCopyMessage, 1000)
}
)

passwordField2.addEventListener('click', function() {
        navigator.clipboard.writeText(passwordField2.textContent)
        copyMsg.style.display = 'block'
        if ( 480 < width) {
        copyMsg.style.top = '20%'
        copyMsg.style.left = '85%'
        }
        setTimeout(hideCopyMessage, 1000)
}
)

passwordField3.addEventListener('click', function() {
        navigator.clipboard.writeText(passwordField3.textContent)
        copyMsg.style.display = 'block'
        if ( 480 < width) {
        copyMsg.style.top = '70%'
        copyMsg.style.left = '35%'
        }
        setTimeout(hideCopyMessage, 1000)
}
)

passwordField4.addEventListener('click', function() {
        navigator.clipboard.writeText(passwordField4.textContent)
        copyMsg.style.display = 'block'
        if ( 480 < width) {
        copyMsg.style.top = '70%'
        copyMsg.style.left = '85%'
        }
        setTimeout(hideCopyMessage, 1000)
}
)

function hideCopyMessage() {
    copyMsg.style.display = 'none'
}

window.addEventListener('resize', function() {
    width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        copyMsg.style.top = '93%'
        copyMsg.style.left = '40%'
})


