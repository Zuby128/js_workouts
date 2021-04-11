const inputArea = document.querySelector('input')
const buttons = document.getElementsByTagName('button')


for(let btn of buttons){
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (btn.id == 'equals') {
            inputArea.value = eval(inputArea.value)
        } else if (btn.className == 'num' || btn.className == 'right' || btn.id == 'percent'){
            inputArea.value += btn.textContent
        } else if (btn.id == 'negative') {
            inputArea.value = -inputArea.value
        } else if (btn.id == 'clear') {
            inputArea.value = ''
        } 
        
    })

}
