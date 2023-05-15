/*
//20 buttons: 4 on top by 5
//input on top, numbers on top right
//clear top left, - , square root, division
//numbers then multiplication
//numbers then subtraction
//numbers then addition
//0, decimal, square root, equals

For each button make it do the function 


// /, x , - , + all a different color
// clear, -, square root all a diff color

Pseudocode 
body centered
div around each row of buttons
set each div to block
div around rows
make input width of div around rows
make buttons 1/4 width of div around rows
give buttons a border

JS
use forEach() to add an event listener to each button
use if else to determine what kind of button it is
*/

const buttons = document.querySelectorAll('.number-button')
const input = document.querySelector('input')
const clear = document.querySelector('#clear')
const equalsSign = document.getElementById('equals-sign')
const operations = document.querySelectorAll('.operator')
const clicked = []

buttons.forEach((element) => {
    element.addEventListener('click', ()=>{
    clicked.push(element.innerText)
    input.placeholder = clicked.join('')
})
})

clear.addEventListener('click', ()=>{
    input.placeholder=''
    for(let i = 0; i<=13;i++){
        clicked.pop()
    }
})

operations.addEventListener('click', ()=>{
    parseFloat(clicked.join(''))
})

const numbers = [1,2,3,4,5,6,7]
numbers.forEach((num)=>{
    console.log(num);
})


