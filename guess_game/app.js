
const checkNum = document.getElementById('checkNum');
const guessBtn = document.getElementById('guessBtn');

let guessNum = Math.floor((Math.random() * 100) + 1);

guessBtn.addEventListener('click', guessControl)

let message = document.getElementById('message')
let counter = document.getElementById('counter')

let resetBtn = document.getElementById('resetBtn')
resetBtn.disabled = true;
resetBtn.addEventListener('click', resetGame = () => {
    location.reload()
})

let count = 1
function guessControl(event) {
    event.preventDefault()
    if(Number(checkNum.value) === guessNum) {    
        message.innerHTML = 'CONGRATS, YOU GOT IT!!!'
        counter.innerHTML = `guess number: ${count++}`
        guessBtn.disabled = true;
        resetBtn.disabled = false;
    } else if(Number(checkNum.value) > guessNum) {    
        message.innerHTML = 'please down' 
        counter.innerHTML = `guess number: ${count++}`
    } else {    
        message.innerHTML = 'please up' 
        counter.innerHTML = `guess number: ${count++}`
    }     
}


