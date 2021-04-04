
const checkNum = document.getElementById('checkNum');
const guessBtn = document.getElementById('guessBtn');

const guessNum = Math.floor((Math.random() * 100) + 1);

guessBtn.addEventListener('click', guessControl)

let message = document.getElementById('message')
let counter = document.getElementById('counter')

let count = 1
function guessControl() {
    const newNum = Number(checkNum.value)
    if(newNum === guessNum) {    
        message.innerHTML = 'CONGRATS, YOU GOT IT!!!'
        counter.innerHTML = `guess number: ${count++}`
    } else if(newNum > guessNum) {    
        message.innerHTML = 'please down' 
        counter.innerHTML = `guess number: ${count++}`   
    } else {    
        message.innerHTML = 'please up' 
        counter.innerHTML = `guess number: ${count++}`
    }            
}