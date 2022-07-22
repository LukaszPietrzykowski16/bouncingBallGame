import Ball from './ball.js'
const ball = new Ball(document.querySelector('.ball'))
// const blocks1Ball = new Ball(document.querySelector('.block1'))
const blocks2Ball = new Ball(document.querySelector('.block2'))

const div_list = document.querySelectorAll('div'); 
//const div_array = [...div_list]; 

const nameOfClass = div_list[0].className

const test = document.querySelector(`.${nameOfClass}`)
console.log( test)
    




// const blocks1Ball = new Ball(document.querySelector(`.${nameOfClass}`))

//const test = document.querySelector(`${div_list[0]}`)
//console.log(test)

// const blocks1Ball = new Ball(document.querySelector(`${div_array[0]}`))


function utils() {
    return blocks1Ball.rect(), blocks2Ball.rect()
}


export default utils