import Ball from './ball.js'
const ball = new Ball(document.querySelector('.ball'))

const blocks2Ball = new Ball(document.querySelector('.block2'))



//const div_array = [...div_list]; 

const arr = []

function test() {
    const div_list = document.querySelectorAll('div'); 
    for (let i=0; i<div_list.length; i++){
        const nameOfClass = div_list[i].className

        const test = document.querySelector(`.${nameOfClass}`)
        console.log( test)
            
        const block = new Ball(test)
        arr.push(block.rect())
    }
    console.log(arr)
    return arr
    
}

/*

const nameOfClass = div_list[0].className

const test = document.querySelector(`.${nameOfClass}`)
console.log( test)
    
const blocks1Ball = new Ball(test)

*/

function utils() {
    return test()
}


export default utils