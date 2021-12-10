let randomNumber = Math.floor(Math.random() * (200 - 1)) + 1
let  text =  document.getElementById('text')
console.log(randomNumber);
 let getBtn = document.getElementById('generate')
getBtn.addEventListener('click',getGameNumber)
function getGameNumber(){
    let getGNumber = document.getElementById('g').value
    if(randomNumber == getGNumber) {
        text.innerHTML = "Угадал"
    }else{
        text.innerHTML = "Ты Не Угадал"
    }
}