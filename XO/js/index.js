const newGameEl = document.getElementById('new-game')
const textEl = document.getElementById('text-el')
const c1El = document.getElementById('c1')
const c2El = document.getElementById('c2')
const c3El = document.getElementById('c3')
const c4El = document.getElementById('c4')
const c5El = document.getElementById('c5')
const c6El = document.getElementById('c6')
const c7El = document.getElementById('c7')
const c8El = document.getElementById('c8')
const c9El = document.getElementById('c9')
const t1El = document.getElementById('t1')
const t2El = document.getElementById('t2')
const t3El = document.getElementById('t3')
const t4El = document.getElementById('t4')
const t5El = document.getElementById('t5')
const t6El = document.getElementById('t6')
const t7El = document.getElementById('t7')
const t8El = document.getElementById('t8')
const t9El = document.getElementById('t9')
let turn = 0
let game = 1

function addSymb(c) {
    if (c.textContent == '') {
        if (turn%2 == 0) {
            c.textContent = 'X'
        }
        else {
            c.textContent = 'O'
        }
    }
    turn += 1
    console.log(turn)
}

if (game == 1) {
c1El.addEventListener('click', function(){
    addSymb(t1El)
})
c2El.addEventListener('click', function(){
    addSymb(t2El)
})
c3El.addEventListener('click', function(){
    addSymb(t3El)
})
c4El.addEventListener('click', function(){
    addSymb(t4El)
})
c5El.addEventListener('click', function(){
    addSymb(t5El)
})
c6El.addEventListener('click', function(){
    addSymb(t6El)
})
c7El.addEventListener('click', function(){
    addSymb(t7El)
})
c8El.addEventListener('click', function(){
    addSymb(t8El)
})
c9El.addEventListener('click', function(){
    addSymb(t9El)
})
}


